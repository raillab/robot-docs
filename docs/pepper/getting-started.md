---
id: pepper-getting-started
title: Getting Started
description: Learn how to start working with the Pepper robot.
sidebar_position: 2
---

# 🚀 Getting Started with the Pepper Robot

This guide walks you through two ways to interact with the Pepper robot in The RAIL Lab:

1. **Direct Connection** – Quickly communicate with Pepper via WiFi, SSH, or its web interface.
2. **Docker Development Environment** – Use a consistent containerized setup with the NAOqi SDK and Choregraphe for development and testing.

---

## 🧭 Option 1: Connect Directly to Pepper

Use this method when you want to:

- Manually control Pepper using its web interface
- Use SSH to run simple commands or inspect logs
- Trigger built-in behaviors

### 🔌 Power and Network

1. **Turn Pepper On** using the button under its screen.
2. **Connect to the RAIL Lab WiFi network**.
3. **Find Pepper's IP Address**:
   - Default: `192.168.1.5`
   - Or: press the power button once; it will speak the address.

### 🌐 Web Interface

Navigate to `http://192.168.1.5` in your browser and log in.

### 🔐 SSH Access

```bash
ssh nao@192.168.1.5
```

- *Credentials are shared in the Pepper Discord channel.*
- Do not modify system files (e.g. `/opt/aldebaran`).

### 🎤 Voice & Interaction Examples

Pepper understands:

- "close hand"
- "raise arm"
- "look left/right"
- "shake hand"
- "stop looking at me"

Touch interactions:

- Stroke head → Pepper purrs
- Cover front camera → Pepper goes to sleep

---

## 🐳 Option 2: Use the Docker Development Environment

Use this when you want to:

- Write custom Python scripts using the NAOqi SDK
- Run Choregraphe GUI on your machine for behavior creation
- Maintain a consistent dev environment with no manual setup

This setup replicates Pepper’s development environment locally in a Docker container, removing the need to install legacy software natively.

### 🧰 Requirements

- Docker
- For Windows: X Server (e.g., VcXsrv)
- RAIL Lab resources:
  - Choregraphe installer
  - Python SDK archive
  - License key

---

## 🔧 Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/raillab/docker-for-pepper-robot.git
cd docker-for-pepper-robot
```

### Step 2: Add Installation Files

Get from a lab admin:

- `choregraphe-suite-2.5.10.7-linux64-setup.run`
- `pynaoqi-python2.7-2.8.6.23-linux64.tar.gz`

Place both in the repo root.

### Step 3: Build and Run

```bash
docker build -t wits-naoqi .
./run_container.sh
```

Additional terminals:
```bash
docker exec -it wits_pepper bash
```

**Windows users:**

```bash
xhost +local:docker
# After you're done:
xhost -local:docker
```

---

## 🧩 Install Choregraphe in Docker

```bash
/choregraphe/choregraphe-suite-2.5.10.7-linux64-setup.run
```

Or use silent install:

```bash
/choregraphe/choregraphe-suite-2.5.10.7-linux64-setup.run --mode unattended --installdir /home/user/choregraphe/
```

To relaunch Choregraphe later:

```bash
./choregraphe/choregraphe
```

From the Choregraphe GUI, you can connect to Pepper using its IP address.

---

## 🧪 Test the Python SDK

```python
from naoqi import ALProxy
tts = ALProxy("ALTextToSpeech", "192.168.1.5", 9559)
tts.say("Hello, world!")
```

---

## 🧑‍💻 Development Workflow

- The `./src` directory is mounted into the container.
- Edit code on your machine and run/test it from the container.
- Deploy and test behavior on the real Pepper robot.

---

## 📚 Additional Resources

- [NAOqi Getting Started](http://doc.aldebaran.com/2-5/index.html)
- [Python SDK Docs](http://doc.aldebaran.com/2-5/dev/python/index.html)
- [Choregraphe Guide](http://doc.aldebaran.com/2-5/software/choregraphe/index.html)
- [qicli Reference](http://doc.aldebaran.com/2-5/dev/tools/qicli.html)

**Supported SDKs:**

✅ Python | ⏳ C++ | ⏳ Java | ⏳ JavaScript | ⏳ ROS
