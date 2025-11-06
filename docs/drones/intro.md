---
id: drones-about
title: About
description: Overview of the multirotor drones used in the RAIL Lab.
sidebar_position: 9
keywords: [robotics, drones, UAV, quadcopter, autonomy, aerial robotics]
---

# ✈️ About Our Drones

Our lab uses a range of **multirotor drones** (commonly quadcopters) for research in aerial autonomy, mapping, swarm coordination, and perception-driven navigation. These platforms offer high maneuverability, flexible sensor integration, and the ability to operate both indoors and outdoors with appropriate safety precautions.

Because drones operate in 3D space and require continuous closed-loop control, they serve as powerful tools for studying advanced robotics concepts — from flight dynamics and state estimation to multi-agent planning and communication-constrained coordination.

---

## 🌟 Key Characteristics

| Feature | Description |
|--------|-------------|
| **Flight Type** | Multirotor (typically quadcopters), providing stable hover and agile maneuvering |
| **Propulsion** | Brushless DC motors with ESC control for real-time thrust adjustment |
| **State Estimation** | IMU + barometer onboard, with optional Vicon/OptiTrack motion capture indoors |
| **Onboard Compute** | Companion computer (e.g., Jetson / Raspberry Pi) or flight controller firmware |
| **Sensors** | Can include depth cameras, LiDAR, optical flow sensors, and downward-facing cameras |
| **Software Stack** | Commonly uses **ROS**, **MAVROS**, and **PX4** or **ArduPilot** firmware |
| **Safety** | Requires prop guards, controlled environment, and strict flight protocol |

---

## 🧱 System Architecture (Typical Setup)

```
+------------------------------------------------+
|         Onboard Companion Computer              |
| (ROS, planning algorithms, perception models)   |
+------------------------------------------------+
                     |
                     | MAVLink (via serial or UDP)
                     v
+------------------------------------------------+
|         Flight Controller (PX4/ArduPilot)       |
| (Low-level control, attitude stabilization)     |
+------------------------------------------------+
                     |
                     v
     Motors/ESCs  +  IMU + Barometer + Sensors
```

The flight controller maintains stability and executes control loops, while the onboard computer handles high-level autonomy such as mapping, object detection, and navigation.

---

## 🚁 What You Can Do With Them

- **Autonomous waypoint navigation**
- **3D mapping and SLAM in indoor or GPS-denied environments**
- **Reinforcement learning for control and obstacle avoidance**
- **Vision-based landing and object tracking**
- **Swarm / multi-drone coordination experiments**
- **Communication-constrained planning and collaboration**

---

## 🧰 Relevant Software & Tools

- PX4 Autopilot — https://px4.io/
- MAVROS Package — http://wiki.ros.org/mavros
- QGroundControl — https://qgroundcontrol.com/
- ROS Flight Control Interfaces — http://wiki.ros.org/rosflight

---

## 🧑‍🔬 In Our Lab

We use drones to explore:

- Communication-efficient **multi-agent coordination**
- Autonomous navigation in **GPS-denied** environments
- Vision-based **target detection and tracking**
- Safe reinforcement learning deployment strategies

> Drones require **pre-flight inspection**, **clear environment**, and **strict safety procedures**.  
> Please complete training and obtain flight approval before operation.

---

## 🤝 Contribute

If you develop new flight procedures, perception nodes, or simulation environments, please add them here!  
Clear documentation helps ensure **safe, reproducible, and collaborative** drone research. 💙