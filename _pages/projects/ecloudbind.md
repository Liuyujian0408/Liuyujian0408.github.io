---
layout: project
permalink: /projects/ecloudbind/
title: "E-CloudBind"
author_profile: false
---

<a class="back" href="/#-research-projects">Back to Research Projects</a>

<h1>An electron-density point-cloud framework for robust protein-ligand interaction prediction</h1>

<p class="authors"><strong>Yujian Liu</strong><sup>*</sup>, Yutong Wang<sup>*</sup>, Qingquan Wang<sup>*</sup>, Meitang Peng, Yuan Chen, Yuechuan Lin, Dongxu Shen, Xiaoli Liu, Shidang Xu<sup>&dagger;</sup>, Bin Liu</p>

<p class="note"><sup>*</sup> Equal contribution. <sup>&dagger;</sup> Corresponding author.</p>

<p>Structure-based affinity models are sensitive to atomic coordinate noise, which is common in low-resolution crystal structures and even more severe in AlphaFold-predicted proteins. Atom-level networks that assume sub-angstrom accuracy therefore degrade on non-covalent interactions. E-CloudBind represents the complex as electron-density point clouds fused with molecular graphs, so interaction learning does not depend on exact atomic coordinates.</p>

<figure class="project-figure">
<img src="{{ '/images/projects/ecloudbind_framework.png' | relative_url }}" alt="Fig. 2 E-CloudBind framework" width="100%">
<figcaption>Fig. 2. Overview of the E-CloudBind framework.</figcaption>
</figure>

<p>As shown in Fig. 2, ligand electron densities are computed with semi-empirical quantum calculations, while protein pockets are represented as van der Waals-guided Gaussian point clouds. When electron-density isosurfaces intersect, a resolution-agnostic interaction graph is constructed. A point-cloud encoder captures local non-covalent patterns and is fused with covalent molecular-graph features; a heterogeneous graph network then regresses binding affinity and remains robust across structural quality levels.</p>
