---
id: a1dog-getting-started
title: Getting Started
description: Powering on, safe setup, and basic controls for the Unitree A1.
sidebar_position: 2
authors: [ibrahims]
---

# 🚀 Getting Started with the Unitree A1

This page gets you from **power off → standing → walking** in minutes, with a few safety must-dos and the most useful controller combos.

---

## ✅ Pre-Run Safety Checklist

> Keep people clear of the robot before enabling motion. Never reach between the legs while powered.

- **Flat, open space** with good grip.
- **Battery charged & latched** (quick-press the battery button to see level).
- **Cables & add-ons secure** (camera/LiDAR mounted, no loose wires).
- **Controller on & linked** (keep it in hand before standing the robot).

---

## 🔋 Powering On (Boot & Auto-Stand)

1. **Wake the battery:**  
   Quick-press the battery button **once**, then **press and hold ~3 s** (≥2 s) until the battery LED is solid and the robot begins booting.

2. **Self-test & stand:**  
   After a short self-test, the A1 should **stand to its initial height**. That means boot is successful.

3. **If it *doesn’t* stand:**  
   Use the controller to bring it up manually:  
   - **Hold `L2` + press `B`** to enter a relaxed/damping state.  
   - Then **hold `L2` + press `A`** to perform the semi-squat → stand sequence.  
   - If joints were locked, **press `START`** once to release the lock, then repeat **`L2`+`A`** if needed.

> Tip: If the robot lies prone or stays floppy (zero-torque), repeat **`L2`+`B`** then **`L2`+`A`** once more.

---

## 🎮 Basic Controls

> The mappings below are from the A1 [user manual](https://www.mybotshop.de/Datasheet/Unitree_A1_User_Manual_v1.0.pdf). **This list isn’t exhaustive—it includes only controls we’ve actually had working on our robot at some point.**

### Start/stop stepping
- **`START`** — Toggle between **stepping** and **stationary standing**.

### Posture & torque states (when standing)
- **Hold `L2` + press `B`** — Squat/lie down and enter **damping / zero-torque**.
- **`L2` + `A`** — Semi-squat → stand. Repeated clicks **lock joints**. Use only while **static**.

### Body attitude (when standing)
- **Left stick ↑ / ↓** — **Lift / squat** body height; center = initial height.
- **Left stick ← / →** — **Yaw** (twist) left/right (more deflection → larger angle).
- **Right stick ↑ / ↓** — **Pitch** forward/back; center = level.
- **Right stick ← / →** — **Roll** (facing the robot: push **left** → rolls **right**; push **right** → rolls **left**).

### Walking controls (while stepping)
- **Left stick ↑ / ↓** — Move **forward / backward** (speed scales with deflection).
- **Left stick ← / →** — **Turn in place** (CCW/CW) while stepping.
- **Right stick ← / →** — **Strafe** left/right (lateral speed scales).

### Combined stick actions (when standing)
- **Left ↓ + Right ↑** — **Squat + lean forward**.  
- **Left ↓ + Right ↓** — **Squat + lean back**.  
- **Right stick circle (CW / CCW)** — **Rotate body** clockwise / counter-clockwise.  
- **Right ↑ + Left ← / →** — **Lean forward + twist** left/right.  
- **Right ↓ + Left ← / →** — **Lean back + twist** left/right.  

---

## ⚠️ Special Actions — Roll (use with extreme caution)

- **Hold `L2` + press `X`** — Roll **180°** to the right.  
- **Hold `L2` + press `Y`** — Roll **360°** to the right.  

> **Avoid using these actions**: they carry a **risk of damage to the robot**, especially if any sensors or mounts (e.g., LiDAR) are installed.

## 🧯 Quick “Oh No!” Actions

- **Stop stepping immediately:** Press **`START`** (robot remains standing but stops walking).  
- **Make it safe to approach:** **`L2` + `B`** to enter damping/relax before touching or carrying.  
- **If controls feel unresponsive:** Ensure you’re **in stepping mode** (press `START`), or try **`L2`+`START`** to switch gait, then re-toggle `START`.

---

## ⏻ Powering Off (Clean Shutdown)

1. **Stop stepping** (press **`START`**) and ensure the robot is **static standing**.  
2. **Lower to the ground:** With **`L2`**, press **`A`** repeatedly to cycle **squat → stand → lie**, then **`L2` + `B`** to enter relaxed/prone.  
3. **Turn off battery:** **Quick-press** power once, then **press and hold ~3 s** (≥2 s) until the battery LEDs turn off.

> Best practice: Always shut down from a **prone/relaxed** posture on level ground.


---