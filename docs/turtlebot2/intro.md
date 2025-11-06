---
id: turtlebot2-about
title: About
description: Overview of the TurtleBot2 mobile robot platform and its capabilities.
sidebar_position: 1
keywords: [robotics, TurtleBot2, ROS, mobile robot, differential drive]
---

# 🐢 Meet the TurtleBot2

The **TurtleBot2** is a compact and beginner-friendly **mobile robot platform** widely used for education, research, and rapid prototyping in robotics. It is designed around a differential-drive base and integrates computing, sensing, and power into a robust yet accessible system.

It provides an affordable, open-source platform for learning autonomous navigation, mapping, computer vision, and human-robot interaction using **ROS (Robot Operating System)**.

---

## 🌟 Key Features

| Feature | Description |
|--------|-------------|
| **Mobile Base** | Kobuki differential-drive base with wheel encoders |
| **Sensors** | 3D depth camera (e.g., Asus Xtion / RealSense), IMU, cliff & bumper sensors |
| **Compute** | Laptop-based, allowing flexible CPU/GPU selection |
| **Battery** | Built-in Kobuki battery powering both base and compute via docking support |
| **Software** | Fully supported in **ROS 1** (e.g., Noetic), partial community support in ROS 2 |
| **Navigation Ready** | Works with SLAM, AMCL, move_base, and mapping frameworks |
| **Expandability** | Mounting plates for additional sensing, manipulators, or payloads |

---

## 🏗️ System Architecture

The TurtleBot2 follows a modular design that separates mobility, compute, and sensing:

```
+---------------------------------+
|        Onboard Computer         |  <-- Runs ROS, SLAM & navigation algorithms
+---------------------------------+
                 |
                 | USB
                 v
+---------------------------------+
|        Kobuki Drive Base        |  <-- Motor drivers, odometry, safety sensors
+---------------------------------+
                 |
                 v
        Motion + Sensor Feedback
```

The onboard computer communicates with the Kobuki base and sensors, exposing control and perception data to ROS topics.

---

## 🧠 What You Can Do With It

The TurtleBot2 platform is suited for:

- **SLAM (Simultaneous Localization and Mapping)**
- **Autonomous indoor navigation**
- **Human–Robot Interaction (HRI) experiments**
- **Multi-agent planning and coordination**
- **Computer vision + depth sensing**
- **Reinforcement learning deployment to real mobile robots**

---

## 🧰 Learning Resources

- Official TurtleBot2 Docs: https://turtlebot.github.io/turtlebot2/
- Kobuki Base Documentation: https://kobuki.readthedocs.io/
- ROS Navigation Stack: http://wiki.ros.org/navigation
- SLAM Tutorials: http://wiki.ros.org/slam_gmapping

---

## 🧑‍🔬 In Our Lab

In the RAIL Lab, the TurtleBot2 is commonly used to:

- Teach new students **ROS fundamentals**
- Demonstrate navigation and mapping in indoor spaces
- Prototype new autonomous navigation strategies
- Run perception-based navigation experiments

> If you're new to the lab, the TurtleBot2 is an excellent *first robot* to learn on before transitioning to larger or more complex platforms.

---