#!/usr/bin/env python3
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node
from control_msgs.action import GripperCommand
import serial
import time

class HandESerialActionServer(Node):
    def __init__(self):
        super().__init__('hand_e_action_server')
        
        # Serial Setup
        self.port = '/tmp/ttyUR'
        try:
            self.ser = serial.Serial(self.port, 115200, timeout=1)
            self.get_logger().info(f"Connected to {self.port}")
            self.initialize_gripper()
        except Exception as e:
            self.get_logger().error(f"Failed to open serial port: {e}")

        self._action_server = ActionServer(
            self,
            GripperCommand,
            '/gripper_action_controller/gripper_cmd',
            execute_callback=self.execute_callback)

    def send_hex(self, hex_bytes):
        self.ser.write(hex_bytes)
        time.sleep(0.1)
        return self.ser.read(self.ser.in_waiting)

    def initialize_gripper(self):
        self.get_logger().info("Resetting and Activating Gripper...")
        # Reset
        self.send_hex(b'\x09\x10\x03\xE8\x00\x03\x06\x00\x00\x00\x00\x00\x00\x73\x30')
        time.sleep(0.5)
        # Activate
        self.send_hex(b'\x09\x10\x03\xE8\x00\x03\x06\x01\x00\x00\x00\x00\x00\x72\xE1')
        time.sleep(4.0)
        self.get_logger().info("Gripper Ready.")

    async def execute_callback(self, goal_handle):
        pos_request = goal_handle.request.command.position
        self.get_logger().info(f'Executing goal: {pos_request}')

        # Standard ROS Mapping:
        # Near 0.0  -> fingers touch -> CLOSE
        # Near 0.025 -> fingers apart -> OPEN
        
        if pos_request < 0.005:  # If the goal is near zero
            # FULL CLOSE Hex
            cmd = b'\x09\x10\x03\xE8\x00\x03\x06\x09\x00\x00\xFF\xFF\xFF\x42\x29'
            label = "CLOSE"
        else:
            # FULL OPEN Hex
            cmd = b'\x09\x10\x03\xE8\x00\x03\x06\x09\x00\x00\x00\xFF\xFF\x72\x19'
            label = "OPEN"

        self.send_hex(cmd)
        time.sleep(1.5)

        goal_handle.succeed()
        result = GripperCommand.Result()
        result.position = pos_request
        result.reached_goal = True
        
        self.get_logger().info(f'Finished {label} command.')
        return result

def main(args=None):
    rclpy.init(args=args)
    server = HandESerialActionServer()
    rclpy.spin(server)
    rclpy.shutdown()

if __name__ == '__main__':
    main()