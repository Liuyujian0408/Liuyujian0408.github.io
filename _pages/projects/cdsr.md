---
permalink: /projects/cdsr/
title: "CDSR"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**Minimal High-Resolution Patches Are Sufficient for Whole Slide Image Representation via Cascaded Dual-Scale Reconstruction**

**Yujian Liu**<sup>*</sup>, Yuechuan Lin<sup>*</sup>, Dongxu Shen<sup>*</sup>, Haoran Li, Yutong Wang, Xiaoli Liu, Shidang Xu<sup>†</sup>  
*PRCV*

Gigapixel WSIs contain sparse diagnostic regions, so dense high-resolution sampling is computationally prohibitive. Low-resolution patches and frozen pretrained encoders, however, lose morphology that downstream MIL needs. CDSR shows that a compact set of informative high-resolution regions is enough to reconstruct a slide-level representation.

<figure class="project-figure">
<img src="/images/projects/cdsr_framework.png" alt="Fig. 2 CDSR framework" width="100%">
<figcaption>Fig. 2. Overview of the CDSR framework.</figcaption>
</figure>

Fig. 2 outlines the cascaded dual-scale design. A two-stage sampler first selects a small number of diverse, informative high-resolution patches from each slide. A Local-to-Global Network then encodes fine-grained morphology together with a broader tissue context and reconstructs a spatially coherent WSI representation. The resulting features are compatible with standard MIL aggregators, so slide-level prediction no longer requires a large number of training patches per slide.

[[arXiv]](https://arxiv.org/abs/2508.01641)
