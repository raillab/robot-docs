---
id: pepper-advanced
title: Advanced
description: ...
sidebar_position: 5
---

# Advanced Tutorials

## Running Python code on Pepper

To have a script run automatically when Pepper starts up, edit the file `/home/nao/naoqi/preferences/autoload.ini` to have:
```
[python]
/home/nao/reacting_to_events.py
```
Or the relevant path to the Python script.