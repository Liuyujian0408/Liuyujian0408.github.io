---
permalink: /projects/mpfusion-mil/
title: "MPFusion-MIL"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**MPFusion-MIL: Morphology-Guided Fusion with Precise Cross-Scale Interaction for Whole Slide Image Analysis**

`Yujian Liu`, Ruoxuan Wu, Yuechuan Lin, Xinjie Shen, Yutong Wang, Haiyu Zhou, Shipu Xu, Shaoai Cai, Lingyu Liang, Shidang Xu† · *ACM MM*

### Key Challenges

- Multi-magnification MIL methods often fuse features without reliable spatial correspondence across scales.
- Spatially mismatched cross-scale interactions dilute discriminative evidence in whole slide images.
- Coarse-level screening features lack sufficient local context for precise pathology analysis.

### Solution

MPFusion-MIL preserves fine-to-coarse spatial correspondence and injects localized high-resolution evidence into aligned low-resolution regions for precise cross-scale fusion.

### Framework

<img src='/images/projects/mpfusion_framework.png' alt="MPFusion-MIL framework" width="100%">

### Pipeline

- Divide patches with Fine-to-Coarse Concentric Patch Division to maintain explicit cross-scale correspondence.
- Enhance coarse-level screening features using Context-Guided Patch Representation Enhancement.
- Inject localized high-magnification evidence into aligned low-magnification representations via Precise Spatial Fusion Strategy.
- Aggregate fused multi-scale features with MIL for slide-level prediction.
