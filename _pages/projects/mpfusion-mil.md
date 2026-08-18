---
layout: project
permalink: /projects/mpfusion-mil/
title: "MPFusion-MIL"
author_profile: false
---

<a class="back" href="/#-research-projects">Back to Research Projects</a>

<h1>MPFusion-MIL: Morphology-Guided Fusion with Precise Cross-Scale Interaction for Whole Slide Image Analysis</h1>

<p class="authors"><strong>Yujian Liu</strong>, Ruoxuan Wu, Yuechuan Lin, Xinjie Shen, Yutong Wang, Haiyu Zhou, Shipu Xu, Shaoai Cai, Lingyu Liang, Shidang Xu<sup>&dagger;</sup></p>

<p class="note"><sup>&dagger;</sup> Corresponding author.</p>

<p>Multi-magnification multiple instance learning (MIL) is widely used for whole-slide images, but many methods fuse coarse and fine features without reliable spatial correspondence. High-resolution evidence is then injected into the wrong low-resolution regions, and coarse screening features lack enough local context for precise diagnosis. MPFusion-MIL keeps explicit fine-to-coarse alignment and performs morphology-guided fusion at corresponding locations.</p>

<figure class="project-figure">
<img src="{{ '/images/projects/mpfusion_framework.png' | relative_url }}" alt="Fig. 2 MPFusion-MIL framework" width="100%">
<figcaption>Fig. 2. Overview of the MPFusion-MIL framework.</figcaption>
</figure>

<p>Fig. 2 shows the three stages. Fine-to-Coarse Concentric Patch Division preserves spatial correspondence across magnifications. Context-Guided Patch Representation Enhancement then enriches coarse screening features with localized context. Precise Spatial Fusion injects high-magnification evidence only into the aligned low-magnification regions, after which a standard MIL aggregator produces the slide-level prediction.</p>
