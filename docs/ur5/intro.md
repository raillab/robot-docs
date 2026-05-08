# RAIL UR5 Documentation

These are the docs for the RAIL UR5 with CB3 Polyscope 3.15 and a Robotiq Hand-E Gripper

The UR5 should be connected to the Wits ethernet, as should the remote PC. For now, the IP addresses are:

- **Robot:** 10.10.187.168
- **PC:** 10.10.187.131

## ==Robot Setup==

We have been using three urcaps:

**The External Control URCAP:** https://github.com/UniversalRobots/Universal_Robots_ExternalControl_URCap
This allows the remote PC to control the arm

**The Robotiq Hand-E Gripper URCAP:** Robotiq_Grippers-1.8.13.22852
This allows the pendant to control the gripper. For now, it seems this URCAP must be disabled in order to communicate with the gripper from the remote PC

**The RS-485 daemon URCAP:** https://github.com/UniversalRobots/Universal_Robots_ToolComm_Forwarder_URCap
This allows a remote PC to access the gripper

## ==PC Setup==

Clone the relevant repo: **TODO**

Be sure to source the workspace for each new terminal:

``` bash
source install/setup.bash
```

And to rebuild if any changes are made:

``` bash
colcon build
```

## ==Controlling the arm==

See: https://github.com/UniversalRobots/Universal_Robots_ROS2_Driver/tree/jazzy

To set up the UR driver, run:

``` bash
ros2 launch ur_robot_driver ur_control.launch.py ur_type:=ur5 robot_ip:=10.10.187.168 use_mock_hardware:=false description_package:=ur5_test description_file:=src/ur5_test/urdf/ur5_hand_e.urdf.xacro
```

In this case, "src/ur5_test/urdf/ur5_hand_e.urdf.xacro" is the xacro file that contains a description of the robot and the gripper, in the ur5_test workspace. You may need to change these. For the simplest tests without the gripper loaded in the urdf, you can just run:

``` bash
ros2 launch ur_robot_driver ur_control.launch.py ur_type:=ur5 robot_ip:=10.10.187.168 use_mock_hardware:=false
```

After executing the driver, you need to run the External Control program on the UR pendant, by doing:

1. Program Robot
2. Load Program
3. Select external.urp and press Open
4. Press play

**Note:** The ur driver can be finicky, and will sometimes crash before you can press play. You just need to ctrl+c and rerun once or twice to get it to work. On the pendant, you will then have to press Stop Program and then play again. If you are launcing rviz and can see the arm in colour (not white), everything should be working.

You can then manually control the arm using moveit by opening a new terminal and launching:

``` bash
ros2 launch ur_moveit_config ur_moveit.launch.py ur_type:=ur5 launch_rviz:=true
```

## ==Controlling the gripper==

This one has been tricky and has cost me a few years of my life, so listen properly!

First, in a new terminal, ssh into the robot:

``` bash
ssh root@10.10.187.168
```

The password should be *easybot*. From there, run:

``` bash
python gripper_bridge.py
```

If this file is missing, you can copy the script in this directory.

Once that is running, you can run the hand-e driver on the remote PC:

``` bash
ros2 launch robotiq_hande_driver gripper_controller_preview.launch.py \
  use_fake_hardware:=false \
  create_socat_tty:=true \
  tty_port:=/tmp/ttyUR \
  socat_ip_address:=10.10.187.168 \
  socat_port:=54322 \
  frequency_hz:=10 \
  launch_rviz:=true
```

If all is well, you can now send commands to the gripper in ROS. For example, closing the gripper:

``` bash
ros2 action send_goal /gripper_action_controller/gripper_cmd control_msgs/action/ParallelGripperCommand "command:
  header:
    stamp:
      sec: 0
      nanosec: 0
    frame_id: ''
  name: []
  position: [0.0]
  velocity: []
  effort: [0]
"
```
