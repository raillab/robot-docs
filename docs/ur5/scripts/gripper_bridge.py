import socket
import os
import time

PORT = 54322
DEVICE = "/dev/ttyUSB0"

# Configure the serial port settings
os.system("stty -F %s 115200 raw -echo" % DEVICE)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.bind(("0.0.0.0", PORT))
s.listen(1)

print("Bridge active on port %s -> %s" % (PORT, DEVICE))

while True:
    conn, addr = s.accept()
    print("PC Connected from %s" % str(addr))
    fd = os.open(DEVICE, os.O_RDWR | os.O_NOCTTY | os.O_NONBLOCK)
    try:
        while True:
            # Read from Network, Write to Serial
            data = conn.recv(1024)
            if not data:
                break
            os.write(fd, data)
            
            # Short sleep to let the gripper respond
            time.sleep(0.05)
            
            # Read from Serial, Write to Network
            try:
                response = os.read(fd, 1024)
                if response:
                    conn.send(response)
            except OSError:
                pass 
    except Exception as e:
        print("Error: %s" % str(e))
    finally:
        print("PC Disconnected")
        conn.close()
        os.close(fd)
