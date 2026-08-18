---
permalink: /projects/ecloudbind/
title: "E-CloudBind"
author_profile: false
---

[← Back to Research Projects](/#-research-projects)

**An electron-density point-cloud framework for robust protein–ligand interaction prediction**

`Yujian Liu`*, Yutong Wang*, Qingquan Wang*, Meitang Peng, Yuan Chen, Yuechuan Lin, Dongxu Shen, Xiaoli Liu, Shidang Xu†, Bin Liu · *Nature Communications*

### Key Challenges

- Structure-based affinity prediction is sensitive to coordinate noise in low-resolution crystal structures.
- AlphaFold-predicted proteins and out-of-distribution complexes further amplify geometric uncertainty.
- Atom-level models rely on sub-ångström accuracy and struggle to model non-covalent interactions robustly.

### Solution

E-CloudBind represents protein–ligand complexes as electron-density point clouds fused with molecular graphs to decouple interaction learning from exact atomic coordinates.

### Framework

<img src='/images/projects/ecloudbind_framework.png' alt="E-CloudBind framework" width="100%">

### Pipeline

- Compute ligand electron densities with semi-empirical quantum calculations and represent protein pockets as van der Waals-guided Gaussian point clouds.
- Build a resolution-agnostic interaction graph when electron-density isosurfaces intersect across atoms.
- Encode local non-covalent patterns with a point-cloud encoder and integrate them with covalent molecular-graph features.
- Regress binding affinity with a heterogeneous graph neural network for robust prediction across structural quality levels.

[[Paper]](https://doi.org/10.1038/s41467-026-74196-5)
