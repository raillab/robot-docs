---
id: pepper-demos
title: Demos
description: Learn how to run interactive demos with the Pepper robot.
sidebar_position: 4
---

# 🎭 Pepper Robot Demos and Tutorials

This page showcases various fun and practical ways to interact with the Pepper robot for demos, teaching, and experimentation. Whether you're using Choregraphe, Python scripts, the browser interface, or your voice—Pepper is ready to perform!

---

## 🗣️ 1. Voice Commands

Pepper comes pre-programmed with a number of verbal triggers:

### ✅ Try saying:

- "close hand"
- "raise arm"
- "look left"
- "stop looking at me"
- "shake hand"

These commands are processed by Pepper’s onboard speech recognition and mapped to pre-programmed behaviors.

---

## 🧠 2. Using Choregraphe

You can create and trigger behaviors using the Choregraphe GUI.

### Launch Choregraphe (in Docker or on host):

```bash
./choregraphe/choregraphe
```

### Connect to Pepper:
Use the robot icon in the top-right and enter the robot’s IP address.

### 🤹 Sample Behaviors

- **Text-to-Speech Node**: Add a `Text to Speech` box and connect a string input. Press play.
- **Head Movement**: Use `Set Angle` box to move the head joints.
- **Dance**: Trigger sequences combining LED changes, text-to-speech, and body movement.

You can also import sample behaviors from:
```
/home/user/naoqi/samples/
```

---

## 🌐 3. Web Interface Demos

Open Pepper’s IP in a browser (e.g., `http://192.168.1.5`)

### Try:

- Typing a sentence and pressing "Say"
- Playing sounds
- Monitoring posture and sensor status in real-time

---

## 🐍 4. Python SDK Examples

Run from Docker or SSH environment.

### 🗣️ Text-to-Speech:

```python
from naoqi import ALProxy
tts = ALProxy("ALTextToSpeech", "192.168.1.5", 9559)
tts.say("Hello from Python!")
```

### 💡 LED Control:

```python
leds = ALProxy("ALLeds", "192.168.1.5", 9559)
leds.fadeRGB("FaceLeds", 0x00FF00, 1.0)  # green
```

### 🕺 Move Pepper's Arms:

```python
motion = ALProxy("ALMotion", "192.168.1.5", 9559)
motion.setAngles(["LShoulderPitch"], [0.5], 0.2)
```

---

## 💻 5. CLI (qicli) Commands

Run these from a direct SSH terminal (`ssh nao@192.168.1.5`)

### Say something:

```bash
qicli call ALTextToSpeech.say "Pepper is ready!"
```

### Trigger predefined behavior:

```bash
qicli call ALBehaviorManager.runBehavior "animations/Stand/Gestures/Hey_1"
```

---

## 🎉 Fun Demo Ideas

| Demo Title | Description |
|------------|-------------|
| 👋 Say Hello | Use TTS and hand wave to greet visitors |
| 🕺 Dance Party | Sequence LED lights, music, and choregraphed movement |
| 🎤 Voice Control | Respond to user commands like “look left” or “raise arm” |
| 🤖 Mirror Me | Mimic human actions via computer vision input (advanced) |
| 🎨 Mood Light | Change facial LEDs based on emotion or time of day |
| 🎓 Teaching Assistant | Say phrases, point to slides, react to classroom events |

---

Pepper isn't just a robot—it's a charming performer, teacher, and lab companion. Try mixing interaction types for a fully immersive demo!

