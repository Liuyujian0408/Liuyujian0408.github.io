---
layout: project
permalink: /projects/mogaface/
title: "MoGaFace"
author_profile: false
---

<a class="back" href="/#-research-projects">Back to Research Projects</a>

<h1>MoGaFace: Momentum-Guided and Texture-Aware Gaussian Avatars for Consistent Facial Geometry</h1>

<p class="authors"><strong>Yujian Liu</strong>, Linlang Cao, Chuang Chen, Fanyu Geng, Dongxu Shen, Peng Cao, Shidang Xu<sup>&dagger;</sup>, Xiaoli Liu<sup>&dagger;</sup></p>

<p class="note"><sup>&dagger;</sup> Corresponding author.</p>

<p>Two-stage Gaussian avatar pipelines start from a tracked FLAME mesh and then freeze that geometry while optimizing appearance. Geometric misalignment therefore suppresses fine facial detail, expression changes are hard to keep consistent across views, and texture becomes over-smoothed. MoGaFace instead refines geometry and texture together during Gaussian rendering.</p>

<figure class="project-figure">
<img src="{{ '/images/projects/mogaface_framework.png' | relative_url }}" alt="Fig. 2 MoGaFace framework" width="100%">
<figcaption>Fig. 2. Overview of the MoGaFace framework.</figcaption>
</figure>

<p>Fig. 2 illustrates the two coupled modules. Momentum-Guided Consistent Geometry maintains an expression bank with momentum updates to correct mesh-image misalignment as expressions change. Latent-Guided Texture Attention compresses multi-view appearance cues into a head-aware latent code and restores high-frequency texture. The refined geometry and texture are written back into Gaussian attributes, yielding more consistent novel-view synthesis and reenactment.</p>
