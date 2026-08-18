---
permalink: /projects/anyavatar/
title: "AnyAvatar"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**AnyAvatar: High-Fidelity Gaussian Head Avatars under Uncalibrated Camera Settings**

**Yujian Liu**<sup>*</sup>, Dongxu Shen<sup>*</sup>, Haoran Li, Yuting Liu, Chuang Chen, Xinyi Jiang, Zhupeng Jiang, Peng Cao, Shidang Xu, Xiaoli Liu<sup>†</sup>  
*ACM MM*

Most 3D Gaussian head avatar methods assume accurately calibrated multi-view cameras. In unconstrained capture, predicted poses are coarse, FLAME initialization becomes unstable, and residual pose error is absorbed into appearance, causing overfitting to training views. AnyAvatar removes the calibration requirement and reconstructs animatable high-fidelity Gaussian heads from unposed images.

<figure class="project-figure">
<img src="/images/projects/anyavatar_framework.png" alt="Fig. 2 AnyAvatar framework" width="100%">
<figcaption>Fig. 2. Overview of the AnyAvatar framework.</figcaption>
</figure>

Fig. 2 summarizes the pipeline. Coarse camera poses are first estimated from uncalibrated views, after which Feasibility-Guided FLAME Initialization and Constrained Ray Proximity Localization recover a stable head that remains observable across views. Pose-Driven Gaussian Optimization then jointly refines camera poses, Gaussian attributes, and FLAME parameters. A structured triplane appearance module further suppresses pose-error compensation and improves cross-view consistency for novel-view rendering and reenactment.
