---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am **Yujian Liu**, a master's graduate in Biomedical Engineering from [South China University of Technology (SCUT)](https://www.scut.edu.cn/en/), advised by Prof. [Shidang Xu](https://www2.scut.edu.cn/bio/). I also work as an algorithm intern at **AISHIWEILAI AI Research** under Dr. Xiaoli Liu.

My research interests include:
- High-fidelity **3D Gaussian avatars** and speech-driven facial animation
- **Whole slide image (WSI)** analysis and computational pathology
- **AI for drug discovery**, including protein–ligand interaction prediction

I am currently applying to **PhD programs for Spring/Fall 2027** admission. Prospective advisors and collaborators are welcome to reach out via [email](mailto:liuyujian0408@gmail.com).

<span class='anchor' id='-education'></span>

# 🎓 Education

- *2023.09 – 2026.06*, [South China University of Technology](https://www.scut.edu.cn/en/), Guangzhou, China — **M.S. in Biomedical Engineering** (GPA: 87.64/100)  
  *Awards:* National Scholarship for Graduate Students
- *2019.09 – 2023.06*, [Central South University of Forestry and Technology](https://www.csuft.edu.cn/), Changsha, China — **B.S. in Communication Engineering** (GPA: 88.88/100)  
  *Awards:* Provincial Outstanding Graduate; First Prize Scholarship

<span class='anchor' id='-experience'></span>

# 💼 Experience

- *2024.07 – Present*, **Algorithm Intern**, AISHIWEILAI AI Research, Beijing, China  
  Supervised by Dr. Xiaoli Liu.
- *2026.07 – Present*, **Research Assistant**, SCUT, Guangzhou, China  
  Supervised by Prof. Shidang Xu.

<span class='anchor' id='-research-projects'></span>

# 🔬 Research Projects

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/syncanimation.png' alt="SyncAnimation" width="100%"><div class="badge">Accepted by IJCAI</div></div></div>
<div class='paper-box-text' markdown="1">

**SyncAnimation: A Real-Time End-to-End Framework for Audio-Driven Human Pose and Talking Head Animation**  
`Yujian Liu`*, Shidang Xu*, Jing Guo, Dingbin Wang, Zairan Wang, Xianfeng Tan, Xiaoli Liu†

The first real-time NeRF-based framework for jointly generating audio-synchronized poses, expressions, and lip movements.

[[Details]](/projects/syncanimation/) [[Project]](https://syncanimation.github.io/) [[arXiv]](https://arxiv.org/abs/2501.14646)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/anyavatar.png' alt="AnyAvatar" width="100%"><div class="badge">Accepted by ACM MM</div></div></div>
<div class='paper-box-text' markdown="1">

**AnyAvatar: High-Fidelity Gaussian Head Avatars under Uncalibrated Camera Settings**  
`Yujian Liu`*, Dongxu Shen*, Haoran Li, Yuting Liu, Chuang Chen, Xinyi Jiang, Zhupeng Jiang, Peng Cao, Shidang Xu, Xiaoli Liu†

The first calibration-free framework for reconstructing animatable 3D Gaussian head avatars from unposed multi-view data.

[[Details]](/projects/anyavatar/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/mogaface.png' alt="MoGaFace" width="100%"><div class="badge">Accepted by PRCV</div></div></div>
<div class='paper-box-text' markdown="1">

**MoGaFace: Momentum-Guided and Texture-Aware Gaussian Avatars for Consistent Facial Geometry**  
`Yujian Liu`, Linlang Cao, Chuang Chen, Fanyu Geng, Dongxu Shen, Peng Cao, Shidang Xu, Xiaoli Liu

Jointly refines facial geometry and texture during Gaussian rendering for consistent 3D head avatar reconstruction.

[[Details]](/projects/mogaface/) [[arXiv]](https://arxiv.org/abs/2508.01218)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/pyrae2e.png' alt="PyraE2E" width="100%"><div class="badge">Accepted by ECCV</div></div></div>
<div class='paper-box-text' markdown="1">

**PyraE2E: Enhancing End-to-End WSI Analysis via Cross-Scale Super-Resolution**  
Yuechuan Lin*, `Yujian Liu`*, Weipeng Zhang, Yanyu Fan, Zikang Wang, Dongxu Shen, Liqin Fei, Xiaoli Liu, Shidang Xu†

An end-to-end WSI framework that uses cross-scale super-resolution to enable efficient joint encoder–aggregator training.

[[Details]](/projects/pyrae2e/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/mpfusion.png' alt="MPFusion-MIL" width="100%"><div class="badge">Accepted by ACM MM</div></div></div>
<div class='paper-box-text' markdown="1">

**MPFusion-MIL: Morphology-Guided Fusion with Precise Cross-Scale Interaction for Whole Slide Image Analysis**  
`Yujian Liu`, Ruoxuan Wu, Yuechuan Lin, Xinjie Shen, Yutong Wang, Haiyu Zhou, Shipu Xu, Shaoai Cai, Lingyu Liang, Shidang Xu†

A morphology-guided MIL framework for precise multi-magnification fusion in whole slide image analysis.

[[Details]](/projects/mpfusion-mil/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/cdsr.png' alt="CDSR" width="100%"><div class="badge">Accepted by PRCV</div></div></div>
<div class='paper-box-text' markdown="1">

**Minimal High-Resolution Patches Are Sufficient for Whole Slide Image Representation via Cascaded Dual-Scale Reconstruction**  
`Yujian Liu`*, Yuechuan Lin*, Dongxu Shen*, Haoran Li, Yutong Wang, Xiaoli Liu, Shidang Xu†

Uses only a few informative high-resolution patches to learn efficient and robust WSI representations.

[[Details]](/projects/cdsr/) [[arXiv]](https://arxiv.org/abs/2508.01641)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/ecloudbind.png' alt="E-CloudBind" width="100%"><div class="badge">Accepted by Nat. Commun.</div></div></div>
<div class='paper-box-text' markdown="1">

**An electron-density point-cloud framework for robust protein–ligand interaction prediction**  
`Yujian Liu`*, Yutong Wang*, Qingquan Wang*, Meitang Peng, Yuan Chen, Yuechuan Lin, Dongxu Shen, Xiaoli Liu, Shidang Xu†, Bin Liu

E-CloudBind models protein–ligand interactions with electron-density point clouds for robust affinity prediction under low-resolution and predicted structures.

[[Details]](/projects/ecloudbind/) [[Paper]](https://doi.org/10.1038/s41467-026-74196-5)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/lipid.png' alt="Lipid Nanoparticles" width="100%"><div class="badge">Major Revision in Nat. Commun.</div></div></div>
<div class='paper-box-text' markdown="1">

**Discovery of activable oncolytic ionizable lipid nanoparticles for selective cancer therapy**  
Hou-Bing Zhang*, `Yujian Liu`*, Weide Xu*, et al.

Identifies activable oncolytic ionizable lipid nanoparticles for selective cancer therapy through machine-learning-accelerated screening.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/dxtalker.png' alt="DXTalker" width="100%"><div class="badge">Submitted to AAAI</div></div></div>
<div class='paper-box-text' markdown="1">

**DXTalker: Factorizing Speech-Driven 3D Facial Animation via Articulatory Prototypes and Personalized Dynamics**  
`Yujian Liu`, Shidang Xu, Xiaoli Liu, et al.

Factorizes speech-driven 3D facial animation into articulatory prototypes and personalized dynamics for accurate lip sync and expressive motion.

</div>
</div>

<span class='anchor' id='-vlog'></span>

# 📹 Vlog

<!-- Intentionally left blank -->
