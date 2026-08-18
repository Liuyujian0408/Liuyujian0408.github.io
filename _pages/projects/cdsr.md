---
permalink: /projects/cdsr/
title: "CDSR"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**Minimal High-Resolution Patches Are Sufficient for Whole Slide Image Representation via Cascaded Dual-Scale Reconstruction**

`Yujian Liu`*, Yuechuan Lin*, Dongxu Shen*, Haoran Li, Yutong Wang, Xiaoli Liu, Shidang Xu† · *PRCV*

### Key Challenges

- Gigapixel WSIs contain sparse diagnostic regions, making dense small-patch sampling computationally prohibitive.
- Pretrained encoders and fragmented low-resolution patches weaken morphology-aware WSI representation learning.
- Existing SSL and MIL pipelines still rely on large numbers of training patches per slide.

### Solution

CDSR selects a compact set of informative high-resolution regions and reconstructs slide representations through cascaded dual-scale learning with a Local-to-Global Network.

### Framework

<img src='/images/projects/cdsr_framework.png' alt="CDSR framework" width="100%">

### Pipeline

- Select a small set of informative and diverse regions from each WSI using a two-stage selective sampling strategy.
- Encode high-resolution patches with a Local-to-Global Network that combines fine-grained morphology and broader context.
- Reconstruct spatially coherent WSI representations compatible with standard MIL aggregators.
- Perform slide-level prediction using only a few high-resolution patches per WSI.

[[arXiv]](https://arxiv.org/abs/2508.01641)
