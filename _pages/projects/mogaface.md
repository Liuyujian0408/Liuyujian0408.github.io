---
permalink: /projects/mogaface/
title: "MoGaFace"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**MoGaFace: Momentum-Guided and Texture-Aware Gaussian Avatars for Consistent Facial Geometry**

`Yujian Liu`, Linlang Cao, Chuang Chen, Fanyu Geng, Dongxu Shen, Peng Cao, Shidang Xu, Xiaoli Liu · *PRCV*

### Key Challenges

- Two-stage avatar pipelines depend on tracked FLAME meshes, and geometric misalignment suppresses fine facial details.
- Expression changes across views are difficult to keep geometrically consistent during Gaussian rendering.
- Texture details are often blurred when geometry and appearance are optimized separately.

### Solution

MoGaFace jointly refines facial geometry and texture during Gaussian rendering through momentum-guided geometry correction and latent-guided texture attention.

### Framework

<img src='/images/projects/mogaface_framework.png' alt="MoGaFace framework" width="100%">

### Pipeline

- Initialize a 3D Gaussian head avatar from multi-view images and tracked FLAME geometry.
- Correct geometry–image misalignment with Momentum-Guided Consistent Geometry using a momentum-updated expression bank.
- Encode compact multi-view cues into head-aware latent representations via Latent-Guided Texture Attention.
- Integrate refined geometry and texture into Gaussian attributes for high-fidelity novel-view synthesis and reenactment.

[[arXiv]](https://arxiv.org/abs/2508.01218)
