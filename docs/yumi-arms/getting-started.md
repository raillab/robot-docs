---
id: yumi-getting-started
title: Getting Started
description: Learn how to start working with YuMi.
sidebar_position: 2
---

# 🚀 Getting Started with Yumi



## Calibration & Safety Notes (RAIL Lab)

### Calibration
YuMi uses **incremental encoders**, so joint zeroing must be done manually:

1. Move arms to the marker-aligned **calibration pose**
2. On teach pendant → **Calibration → Update Revolution Counters**
3. Confirm for each arm

### Auto Mode
- Auto mode runs **~10× faster**
- Only enable when:
  - Workspace is clear
  - Program is verified in Manual mode
  - Calibration is complete

### Networking Setup
| Setting | Value |
|--------|-------|
| Service Port | **XP23** |
| Typical Robot IP | **192.168.125.1** |
| Host PC IP (example) | **192.168.125.82/24** |

---

## 🎮 Control Interfaces

YuMi can be controlled through multiple software interfaces depending on the task, environment, and toolchain. Below are the recommended methods used in the RAIL Lab.

---

### RAPID (On-Robot Programming)**
ABB's native robot programming language.

- **Used for:** production-reliable programs, onboard logic, dual-arm coordination.
- **Edited in:** *RobotStudio* (PC) or the teach pendant.
- **Execution speed:** Full performance, supports **Auto Mode**.
- **Good for:** stable manipulation tasks once development is finalized.

**Reference:** https://library.abb.com/ → Search *“RAPID Instructions, Functions and Data Types Manual”*

---

### Python Control via Yumipy (RAIL Lab Primary Workflow)

- **Repo (use this fork):** https://github.com/galou/yumipy/tree/robotware6_06
- **Purpose:** Direct, script-level control of YuMi **without ROS**.
- **Communication:** TCP socket → requires controller modules:
  - `SERVER_LEFT.mod`
  - `SERVER_RIGHT.mod`
- **Programming Style:**  
  ```python
  from yumi import YumiRobot
  with YumiRobot() as yumi:
      yumi.left.goto_state([0, -130, 30, 0, 40, 0, 135], v=20, a=50)

**Movement Command API:**  
https://berkeleyautomation.github.io/yumipy/api/robot.html

### ROS Control + MoveIt

- Tested with **Ubuntu 16.04 + ROS Kinetic**
- Primary package: https://github.com/kth-ros-pkg/yumi
- Provides:
  - URDF model
  - MoveIt planning pipelines
  - Joint & trajectory controllers
  - Dual arm coordination

ROS Industrial ABB driver:  
https://github.com/ros-industrial/abb

---