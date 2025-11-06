---
id: yumi-overview
title: About
description: ABB IRB 14000 YuMi dual-arm collaborative robot overview for RAIL Lab documentation.
sidebar_position: 9
---

# 🦾 Meet the YuMi Robot

The **ABB IRB 14000 YuMi** is a dual-arm collaborative robot designed for small-part assembly, precision manipulation, and safe human-robot interaction.  
At the RAIL Lab, YuMi is primarily used for research on manipulation, perception, robot learning, and interactive robotic systems.

---

## 🌟 Key Details

- **Manufacturer**: [ABB Robotics](https://new.abb.com/products/robotics)
- **Model**: IRB 14000 **YuMi**
- **Robot Type**: **Dual-arm collaborative robot (COBOT)** designed for safe human-robot interaction
- **Degrees of Freedom**: **7 DOF per arm** (14 axes total)
- **Payload**: ~**0.5 kg per arm**
- **Reach**: ~**559 mm**
- **Repeatability**: ~**±0.02 mm**
- **Safety**: Intrinsically collaborative design, rounded geometry, limited force operation
- **Controller**: **IRC5C** compact robotic controller (supports MultiMove & dual-arm coordination)
- **Programming Interfaces**:
  - **RAPID** (ABB native robot language)
  - **ROS** support via `kth-ros-pkg/yumi`
  - **Python control via Yumipy** (`galou/robotware6_06` fork)
- **Network Interface**: Ethernet (Service Port **XP23**) for control & communication
- **Operating Modes**:
  - **Manual Mode** (slow/jog/teaching)
  - **Auto Mode** (full-speed program execution, ~10× faster)
- **Ideal Use Cases**: Precision assembly, manipulation research, vision-guided robotics

---

## 🛠️ Why It’s a Lab Favorite

- **All-Terrain Robustness**: Handles rocky ground, mud, and slopes up to 30° with ease  
- **High Payload**: Supports heavy sensors and manipulator arms for custom experiments  
- **ROS-Ready**: Includes tutorials for mapping, SLAM, AMCL, Gmapping, and more  
- **Full 3D Perception**: VLP‑16 enables 360° point clouds—great for obstacle avoidance, mapping, and visual odometry

---

## Useful Official Documentation

| Name | Link |
|------|------|
| YuMi Product Page | https://new.abb.com/products/robotics/industrial-robots/irb-14000-yumi |
| ABB Technical Library | https://library.abb.com/ |
| RAPID Language Handbook | https://library.abb.com/ |

---

## Recent Research Using YuMi

| Title | Year | Link |
|-------|------|------|
| Redundancy Parameterization of the YuMi Arm | 2025 | https://arxiv.org/abs/2505.23111 |
| Real-Time Failure Handling w/ Vision-Language Models | 2025 | https://arxiv.org/abs/2503.15202 |
| Digital Twin for Human-Robot Interaction | 2025 | https://www.researchgate.net/publication/381909584 |

---