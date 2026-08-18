---
permalink: /projects/syncanimation/
title: "SyncAnimation"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**SyncAnimation: A Real-Time End-to-End Framework for Audio-Driven Human Pose and Talking Head Animation**

`Yujian Liu`*, Shidang Xu*, Jing Guo, Dingbin Wang, Zairan Wang, Xianfeng Tan, Xiaoli Liu† · *IJCAI*

### Key Challenges

- Existing audio-driven avatar methods are computationally heavy and struggle to meet real-time deployment requirements.
- Lip motion, facial expression, and upper-body pose are often optimized separately, causing inconsistency during silent intervals.
- High-fidelity talking-head generation with synchronized head pose and body motion remains difficult for NeRF-based systems.

### Solution

SyncAnimation jointly models audio-to-pose and audio-to-expression synchronization in a real-time NeRF-based pipeline for coherent full upper-body talking avatars.

### Framework

<img src='/images/projects/syncanimation_framework.png' alt="SyncAnimation framework" width="100%">

### Pipeline

- Encode input audio and predict synchronized head pose and upper-body motion with the AudioPose Syncer.
- Generate emotionally consistent facial expressions with the AudioEmotion Syncer, especially during speech and silence.
- Progressively synthesize audio-aligned head, upper-body, and lip shapes in a unified generation process.
- Render the final avatar with the High-Synchronization Human Renderer for seamless head–body integration.

[[Project]](https://syncanimation.github.io/) [[arXiv]](https://arxiv.org/abs/2501.14646)
