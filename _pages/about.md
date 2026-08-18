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

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/syncanimation.png' alt="Fig. 1 SyncAnimation" width="100%"><div class="badge">Accepted by IJCAI</div></div></div>
<div class='paper-box-text' markdown="1">

**SyncAnimation: A Real-Time End-to-End Framework for Audio-Driven Human Pose and Talking Head Animation**

**Yujian Liu**<sup>*</sup>, Shidang Xu<sup>*</sup>, Jing Guo, Dingbin Wang, Zairan Wang, Xianfeng Tan, Xiaoli Liu<sup>†</sup>

A real-time NeRF talking avatar that jointly synthesizes audio-synchronized head pose, facial expression, and lip motion in one pipeline.

[[Details]](/projects/syncanimation/) [[Project]](https://syncanimation.github.io/) [[arXiv]](https://arxiv.org/abs/2501.14646)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/anyavatar.png' alt="Fig. 1 AnyAvatar" width="100%"><div class="badge">Accepted by ACM MM</div></div></div>
<div class='paper-box-text' markdown="1">

**AnyAvatar: High-Fidelity Gaussian Head Avatars under Uncalibrated Camera Settings**

**Yujian Liu**<sup>*</sup>, Dongxu Shen<sup>*</sup>, Haoran Li, Yuting Liu, Chuang Chen, Xinyi Jiang, Zhupeng Jiang, Peng Cao, Shidang Xu, Xiaoli Liu<sup>†</sup>

Reconstructs animatable 3D Gaussian head avatars from uncalibrated multi-view images by jointly refining camera poses, FLAME geometry, and Gaussian appearance.

[[Details]](/projects/anyavatar/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/mogaface.png' alt="Fig. 1 MoGaFace" width="100%"><div class="badge">Accepted by PRCV</div></div></div>
<div class='paper-box-text' markdown="1">

**MoGaFace: Momentum-Guided and Texture-Aware Gaussian Avatars for Consistent Facial Geometry**

**Yujian Liu**, Linlang Cao, Chuang Chen, Fanyu Geng, Dongxu Shen, Peng Cao, Shidang Xu, Xiaoli Liu

Improves 3D Gaussian head avatars by jointly correcting facial geometry and recovering texture during rendering, instead of relying on a frozen tracked mesh.

[[Details]](/projects/mogaface/) [[arXiv]](https://arxiv.org/abs/2508.01218)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/pyrae2e.png' alt="Fig. 1 PyraE2E" width="100%"><div class="badge">Accepted by ECCV</div></div></div>
<div class='paper-box-text' markdown="1">

**PyraE2E: Enhancing End-to-End WSI Analysis via Cross-Scale Super-Resolution**

Yuechuan Lin<sup>*</sup>, **Yujian Liu**<sup>*</sup>, Weipeng Zhang, Yanyu Fan, Zikang Wang, Dongxu Shen, Liqin Fei, Xiaoli Liu, Shidang Xu<sup>†</sup>

An end-to-end WSI framework that turns the slide resolution pyramid into cross-scale super-resolution supervision, so the encoder and aggregator can be trained together.

[[Details]](/projects/pyrae2e/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/mpfusion.png' alt="Fig. 1 MPFusion-MIL" width="100%"><div class="badge">Accepted by ACM MM</div></div></div>
<div class='paper-box-text' markdown="1">

**MPFusion-MIL: Morphology-Guided Fusion with Precise Cross-Scale Interaction for Whole Slide Image Analysis**

**Yujian Liu**, Ruoxuan Wu, Yuechuan Lin, Xinjie Shen, Yutong Wang, Haiyu Zhou, Shipu Xu, Shaoai Cai, Lingyu Liang, Shidang Xu<sup>†</sup>

A multi-magnification MIL model that keeps spatial correspondence across scales and injects localized high-resolution evidence into aligned coarse regions.

[[Details]](/projects/mpfusion-mil/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/cdsr.png' alt="Fig. 1 CDSR" width="100%"><div class="badge">Accepted by PRCV</div></div></div>
<div class='paper-box-text' markdown="1">

**Minimal High-Resolution Patches Are Sufficient for Whole Slide Image Representation via Cascaded Dual-Scale Reconstruction**

**Yujian Liu**<sup>*</sup>, Yuechuan Lin<sup>*</sup>, Dongxu Shen<sup>*</sup>, Haoran Li, Yutong Wang, Xiaoli Liu, Shidang Xu<sup>†</sup>

Shows that a small set of informative high-resolution patches, selected and reconstructed through cascaded dual-scale learning, is sufficient for robust WSI representation.

[[Details]](/projects/cdsr/) [[arXiv]](https://arxiv.org/abs/2508.01641)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/ecloudbind.png' alt="Fig. 1 E-CloudBind" width="100%"><div class="badge">Accepted by Nat. Commun.</div></div></div>
<div class='paper-box-text' markdown="1">

**An electron-density point-cloud framework for robust protein–ligand interaction prediction**

**Yujian Liu**<sup>*</sup>, Yutong Wang<sup>*</sup>, Qingquan Wang<sup>*</sup>, Meitang Peng, Yuan Chen, Yuechuan Lin, Dongxu Shen, Xiaoli Liu, Shidang Xu<sup>†</sup>, Bin Liu

Predicts protein–ligand binding affinity from electron-density point clouds, remaining robust when atomic coordinates are noisy or come from predicted structures.

[[Details]](/projects/ecloudbind/) [[Paper]](https://doi.org/10.1038/s41467-026-74196-5)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/lipid.png' alt="Fig. 1 Lipid Nanoparticles" width="100%"><div class="badge">Major Revision in Nat. Commun.</div></div></div>
<div class='paper-box-text' markdown="1">

**Discovery of activable oncolytic ionizable lipid nanoparticles for selective cancer therapy**

Hou-Bing Zhang<sup>*</sup>, **Yujian Liu**<sup>*</sup>, Weide Xu<sup>*</sup>, et al.

Uses machine-learning-accelerated screening to discover activable oncolytic ionizable lipid nanoparticles for selective cancer therapy.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/dxtalker.png' alt="Fig. 1 DXTalker" width="100%"><div class="badge">Submitted to AAAI</div></div></div>
<div class='paper-box-text' markdown="1">

**DXTalker: Factorizing Speech-Driven 3D Facial Animation via Articulatory Prototypes and Personalized Dynamics**

**Yujian Liu**, Shidang Xu, Xiaoli Liu, et al.

Factorizes speech-driven 3D facial animation into shared articulatory prototypes and identity-specific dynamics for accurate lip sync and expressive motion.

</div>
</div>

<span class='anchor' id='-vlog'></span>

# 📹 Vlog

<!-- Intentionally left blank -->
