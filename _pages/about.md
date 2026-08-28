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

I am **Yujian Liu**, from China. I am a master's graduate in Biomedical Engineering from South China University of Technology, advised by Prof. [Shidang Xu](https://www2.scut.edu.cn/bmse_en/2019/1216/c21293a478201/page.htm). I also work as an algorithm intern at Beijing Yuaiweiwu Technology Co., Ltd. under Dr. Xiaoli Liu.

My research interests include:
- High-fidelity **3D Gaussian avatars** and speech-driven facial animation
- **Whole slide image (WSI)** analysis and computational pathology
- **AI for drug discovery**, including protein–ligand interaction prediction and molecular generation

I am currently applying to **PhD programs for Spring/Fall 2027** admission. Prospective advisors and collaborators are welcome to reach out via [email](mailto:liuyujian0408@gmail.com).

<span class='anchor' id='-education'></span>

# 🎓 Education

- *2023.09 – 2026.06*, [South China University of Technology](https://www.scut.edu.cn/en/), Guangzhou, China — M.S. in Biomedical Engineering (GPA: 87.64/100)  
  *Awards:* National Scholarship for Graduate Students
- *2019.09 – 2023.06*, [Central South University of Forestry and Technology](https://www.csuft.edu.cn/), Changsha, China — B.S. in Communication Engineering (GPA: 88.88/100, Rank 8/106)  
  *Awards:* Postgraduate recommendation; Provincial Outstanding Graduate; First Prize Scholarship

<span class='anchor' id='-experience'></span>

# 💼 Experience

- *2024.07 – Present*, **Algorithm Intern**, Beijing Yuaiweiwu Technology Co., Ltd., Beijing, China  
  Supervised by Dr. Xiaoli Liu.
- *2026.07 – Present*, **Research Assistant**, South China University of Technology, Guangzhou, China  
  Supervised by Prof. Shidang Xu.

<span class='anchor' id='-research-projects'></span>

# 🔬 Research Projects

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/ecloudbind.png' alt="Fig. 1 E-CloudBind" width="100%"><div class="badge">Accepted by Nat. Commun. (JCR Q1, IF=18.1)</div></div></div>
<div class='paper-box-text' markdown="1">

**An electron-density point-cloud framework for robust protein–ligand interaction prediction**

**Yujian Liu**<sup>*</sup>, Yutong Wang<sup>*</sup>, Qingquan Wang<sup>*</sup>, Meitang Peng, Yuan Chen, Yuechuan Lin, Dongxu Shen, Xiaoli Liu, Shidang Xu<sup>&dagger;</sup>, Bin Liu

Predicts protein–ligand binding affinity from electron-density point clouds, remaining robust when atomic coordinates are noisy or come from predicted structures.

<a class="js-project-detail" href="/projects/ecloudbind/" data-detail-url="/projects/ecloudbind/">Details</a> [Paper](https://doi.org/10.1038/s41467-026-74196-5)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/anyavatar.png' alt="Fig. 1 AnyAvatar" width="100%"><div class="badge">Accepted by ACM MM</div></div></div>
<div class='paper-box-text' markdown="1">

**AnyAvatar: High-Fidelity Gaussian Head Avatars under Uncalibrated Camera Settings**

**Yujian Liu**<sup>*</sup>, Dongxu Shen<sup>*</sup>, Haoran Li, Yuting Liu, Chuang Chen, Xinyi Jiang, Zhupeng Jiang, Peng Cao, Shidang Xu, Xiaoli Liu<sup>&dagger;</sup>

Reconstructs animatable 3D Gaussian head avatars from uncalibrated multi-view images by jointly refining camera poses, FLAME geometry, and Gaussian appearance.

<a class="js-project-detail" href="/projects/anyavatar/" data-detail-url="/projects/anyavatar/">Details</a> [Project](https://aishiweilai.github.io/AnyAvatar.github.io/) [Code](https://github.com/AISHIWEILAI/AnyAvatar)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/mpfusion.png' alt="Fig. 1 MPFusion-MIL" width="100%"><div class="badge">Accepted by ACM MM</div></div></div>
<div class='paper-box-text' markdown="1">

**MPFusion-MIL: Morphology-Guided Fusion with Precise Cross-Scale Interaction for Whole Slide Image Analysis**

**Yujian Liu**, Ruoxuan Wu, Yuechuan Lin, Xinjie Shen, Yutong Wang, Haiyu Zhou, Shipu Xu, Shaoai Cai, Lingyu Liang, Shidang Xu<sup>&dagger;</sup>

A multi-magnification MIL model that keeps spatial correspondence across scales and injects localized high-resolution evidence into aligned coarse regions.

<a class="js-project-detail" href="/projects/mpfusion-mil/" data-detail-url="/projects/mpfusion-mil/">Details</a>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/pyrae2e.png' alt="Fig. 1 PyraE2E" width="100%"><div class="badge">Accepted by ECCV</div></div></div>
<div class='paper-box-text' markdown="1">

**PyraE2E: Enhancing End-to-End WSI Analysis via Cross-Scale Super-Resolution**

Yuechuan Lin<sup>*</sup>, **Yujian Liu**<sup>*</sup>, Weipeng Zhang, Yanyu Fan, Zikang Wang, Dongxu Shen, Liqin Fei, Xiaoli Liu, Shidang Xu<sup>&dagger;</sup>

An end-to-end WSI framework that turns the slide resolution pyramid into cross-scale super-resolution supervision, so the encoder and aggregator can be trained together.

<a class="js-project-detail" href="/projects/pyrae2e/" data-detail-url="/projects/pyrae2e/">Details</a>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/syncanimation.png' alt="Fig. 1 SyncAnimation" width="100%"><div class="badge">Accepted by IJCAI (Oral)</div></div></div>
<div class='paper-box-text' markdown="1">

**SyncAnimation: A Real-Time End-to-End Framework for Audio-Driven Human Pose and Talking Head Animation**

**Yujian Liu**<sup>*</sup>, Shidang Xu<sup>*</sup>, Jing Guo, Dingbin Wang, Zairan Wang, Xianfeng Tan, Xiaoli Liu<sup>&dagger;</sup>

A real-time NeRF talking avatar that jointly synthesizes audio-synchronized head pose, facial expression, and lip motion in one pipeline.

<a class="js-project-detail" href="/projects/syncanimation/" data-detail-url="/projects/syncanimation/">Details</a> <a class="js-project-pdf" href="/files/SyncAnimation_Poster.pdf" data-pdf-url="/files/SyncAnimation_Poster.pdf">Poster</a> [Project](https://aishiweilai.github.io/syncanimation.github.io/) [arXiv](https://arxiv.org/abs/2501.14646)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/cdsr.png' alt="Fig. 1 CDSR" width="100%"><div class="badge">Accepted by PRCV</div></div></div>
<div class='paper-box-text' markdown="1">

**Minimal High-Resolution Patches Are Sufficient for Whole Slide Image Representation via Cascaded Dual-Scale Reconstruction**

**Yujian Liu**<sup>*</sup>, Yuechuan Lin<sup>*</sup>, Dongxu Shen<sup>*</sup>, Haoran Li, Yutong Wang, Xiaoli Liu, Shidang Xu<sup>&dagger;</sup>

Shows that a small set of informative high-resolution patches, selected and reconstructed through cascaded dual-scale learning, is sufficient for robust WSI representation.

<a class="js-project-detail" href="/projects/cdsr/" data-detail-url="/projects/cdsr/">Details</a> <a class="js-project-pdf" href="/files/CDSR_Poster.pdf" data-pdf-url="/files/CDSR_Poster.pdf">Poster</a> [arXiv](https://arxiv.org/abs/2508.01641)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/mogaface.png' alt="Fig. 1 MoGaFace" width="100%"><div class="badge">Accepted by PRCV</div></div></div>
<div class='paper-box-text' markdown="1">

**MoGaFace: Momentum-Guided and Texture-Aware Gaussian Avatars for Consistent Facial Geometry**

**Yujian Liu**, Linlang Cao, Chuang Chen, Fanyu Geng, Dongxu Shen, Peng Cao, Shidang Xu<sup>&dagger;</sup>, Xiaoli Liu<sup>&dagger;</sup>

Improves 3D Gaussian head avatars by jointly correcting facial geometry and recovering texture during rendering, instead of relying on a frozen tracked mesh.

<a class="js-project-detail" href="/projects/mogaface/" data-detail-url="/projects/mogaface/">Details</a> <a class="js-project-pdf" href="/files/MoGaFace_Poster.pdf" data-pdf-url="/files/MoGaFace_Poster.pdf">Poster</a> [Project](https://mogaface.github.io/) [arXiv](https://arxiv.org/abs/2508.01218)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/ml_nanoparticle.png' alt="Fig. 1 ML-Enhanced Nanoparticle Design" width="100%"><div class="badge">Accepted by Advanced Science (JCR Q1, IF=14.1)</div></div></div>
<div class='paper-box-text' markdown="1">

**Machine Learning-Enhanced Nanoparticle Design for Precision Cancer Drug Delivery**

Qingquan Wang, **Yujian Liu**, Chenchen Li, Bin Xu, Shidang Xu<sup>&dagger;</sup>, Bin Liu<sup>&dagger;</sup>

Reviews how machine learning can guide nanoparticle synthesis and formulation, and help model nano–bio interactions along the cancer drug-delivery pipeline, from circulation and tumor extravasation to penetration and cellular uptake.

[Paper](https://doi.org/10.1002/advs.202503138)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/lipid.png' alt="Fig. 1 Lipid Nanoparticles" width="100%"><div class="badge">Major Revision in Nat. Commun. (JCR Q1, IF=18.1)</div></div></div>
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

<span class='anchor' id='-awards'></span>

# 🏆 Awards

- *2022*, **Honorable Mention**, Mathematical Contest in Modeling/Interdisciplinary Contest in Modeling
- *2022*, **National Second Prize**, Chinese Collegiate Computing Competition
- *2022*, **National Third Prize**, China College Student Service Outsourcing Innovation and Entrepreneurship Competition
- *2022*, **National Third Prize**, National College Student Market Survey and Analysis Competition
- *2021*, **Meritorious Winner**, Mathematical Contest in Modeling/Interdisciplinary Contest in Modeling
- *2021*, **National Second Prize**, Contemporary Undergraduate Mathematical Contest in Modeling
