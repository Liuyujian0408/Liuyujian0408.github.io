---
permalink: /projects/anyavatar/
title: "AnyAvatar"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**AnyAvatar: High-Fidelity Gaussian Head Avatars under Uncalibrated Camera Settings**

`Yujian Liu`*, Dongxu Shen*, Haoran Li, Yuting Liu, Chuang Chen, Xinyi Jiang, Zhupeng Jiang, Peng Cao, Shidang Xu, Xiaoli Liu† · *ACM MM*

### Key Challenges

- Most Gaussian head avatar methods assume accurately calibrated multi-view cameras, which are unavailable in real-world capture.
- Coarse predicted camera poses destabilize FLAME initialization and reduce cross-view head observability.
- Residual pose errors during Gaussian Splatting optimization cause projection inconsistency and overfitting to training views.

### Solution

AnyAvatar jointly optimizes FLAME initialization, camera poses, and Gaussian attributes to reconstruct high-fidelity animatable head avatars from unposed multi-view images.

### Framework

<img src='/images/projects/anyavatar_framework.png' alt="AnyAvatar framework" width="100%">

### Pipeline

- Predict coarse camera poses from uncalibrated multi-view images and localize a feasible FLAME head via Feasibility-Guided FLAME Initialization.
- Restore stable cross-view head observability using Constrained Ray Proximity Localization.
- Jointly refine camera poses, Gaussian attributes, and FLAME parameters with Pose-Driven Gaussian Optimization.
- Use a structured triplane-based appearance module to improve cross-view consistency and suppress pose-error compensation.
