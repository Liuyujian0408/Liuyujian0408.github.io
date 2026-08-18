---
permalink: /projects/pyrae2e/
title: "PyraE2E"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**PyraE2E: Enhancing End-to-End WSI Analysis via Cross-Scale Super-Resolution**

Yuechuan Lin*, `Yujian Liu`*, Weipeng Zhang, Yanyu Fan, Zikang Wang, Dongxu Shen, Liqin Fei, Xiaoli Liu, Shidang Xu† · *ECCV*

### Key Challenges

- Pretrained natural-image encoders create a domain gap for histopathology whole slide image (WSI) analysis.
- End-to-end WSI training is expensive because high-resolution patch modeling and random sampling discard fine morphology.
- Slide-level labels alone provide sparse supervision for encoder learning.

### Solution

PyraE2E turns the WSI resolution pyramid into dense cross-scale super-resolution supervision, enabling efficient end-to-end joint encoder–aggregator training.

### Framework

<img src='/images/projects/pyrae2e_framework.png' alt="PyraE2E framework" width="100%">

### Pipeline

- Sample informative low-resolution (LR) patches at low magnification using the embedded Cluster-Score Sampling module.
- Retrieve spatially aligned high-resolution (HR) patches at higher magnification as reconstruction targets.
- Encode LR patches with a shared Global–Local Partitioned (GLP) encoder informed by HR features.
- Jointly optimize an SR reconstruction head and a slide-level prediction head under bounded computation.
