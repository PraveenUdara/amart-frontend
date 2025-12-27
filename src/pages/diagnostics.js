// src/pages/diagnostics.js
import React from "react";
import "../styles/diagnostics.css";

// COVER IMAGE
import diagnosticsCover from "../assets/9 pages/diagnostics.jpg";
import medgenomeImg from "../assets/9 pages/diagnostic/Medgenome.webp";
import centogImg from "../assets/9 pages/diagnostic/centog.webp";
import dxImg from "../assets/9 pages/diagnostic/dx.webp";
import foundationImg from "../assets/9 pages/diagnostic/foundati.webp";
import canassistImg from "../assets/9 pages/diagnostic/wrkflow-canassist.webp";
import oncquestImg from "../assets/9 pages/diagnostic/onca.webp";
import basecareImg from "../assets/9 pages/diagnostic/Genomic-Data.webp";

const Diagnostics = () => {
  return (
    <div className="business-page">

      {/* ================= COVER SECTION ================= */}
      <section
        className="business-cover"
        style={{ backgroundImage: `url(${diagnosticsCover})` }}
      >
        <div className="business-cover-overlay">
          <div className="business-cover-content">
            <h1 className="business-cover-title">Diagnostics</h1>
            <p className="business-cover-desc">
              Advanced laboratory diagnostics powered by global partner labs and
              cutting-edge medical technology.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <section className="business-content">
        <h2>World-Class Diagnostic Services</h2>
        <p>
          We provide advanced diagnostic and laboratory services that deliver accurate, timely
          results to support informed healthcare decisions. Using state-of-the-art technology and
          adhering to international quality standards, we offer a comprehensive range of testing
          solutions, including Pathology, Hematology, Oncology, hereditary and rare disease
          testing, screening and carrier testing, and personalized treatment support.
        </p>
        <p>
          Our expert team is committed to precision, efficiency, and reliability, ensuring seamless
          testing experiences for hospitals, clinics, and individual patients. Every test is conducted
          with the highest level of accuracy to support clinicians in diagnosis, early detection, and
          effective treatment planning.
        </p>
        <p>
          By continuously integrating the latest advancements in diagnostic science, we contribute
          to improved health outcomes and enhanced patient care—helping build a healthier
          community through dependable and high-quality diagnostics.
        </p>
        <div className="diagnostics-cta">
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= MEDGENOME FEATURE ================= */}
      <section className="medgenome-section">
        <div className="medgenome-image">
          <img src={medgenomeImg} alt="MedGenome" />
        </div>
        <div className="medgenome-copy">
          <h3>Medgenome</h3>
          <p>
            MedGenome is a genomics and clinical data driven genetic testing and drug
            discovery research company and a leader in genetic testing with expertise
            in identifying genetic mutations using simultaneous genome sequencing and
            clinical data analysis.
          </p>
          <p>
            With the state-of-the-art Next Generation Sequencing (NGS) facility,
            MedGenome is one of the highest throughput NGS & CAP accredited lab in
            South Asia. MedGenome offers comprehensive diagnostic solutions to
            researchers, doctors and hospitals.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= CENTOGENE FEATURE ================= */}
      <section className="centogene-section">
        <div className="centogene-copy">
          <h3>CENTOGENE</h3>
          <p>
            Centogene is one of the largest genetic biotech companies worldwide, the
            European market leader, and one of the global leaders in genetic
            diagnostic analyses of rare inherited diseases.
          </p>
          <p>
            Centogene is focused on transforming clinical, genetic, and biochemical
            data into medical solutions for patients with a global network of
            partners.
          </p>
          <p>
            Click here to learn more about Centogene’s diagnostic services.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
        <div className="centogene-image">
          <img src={centogImg} alt="Centogene" />
        </div>
      </section>

      {/* ================= ONCOTYPE DX FEATURE ================= */}
      <section className="dx-section">
        <div className="dx-image">
          <img src={dxImg} alt="Oncotype DX" />
        </div>
        <div className="dx-copy">
          <h3>Oncotype DX</h3>
          <p>
            We joined hands with MediLinks to provide Oncotype DX to Sri Lankans. The Oncotype DX test is a genomic test that analyzes the activity of a group of genes that can affect how a cancer is likely to behave and respond to treatment.
          </p>
          <p>
            The Oncotype DX is used in two ways: (1) Help doctors figure out a woman’s risk of early-stage, estrogen-receptor-positive breast cancer coming back (recurrence), as well as how likely she is to benefit from chemotherapy after breast cancer surgery. (2) Help doctors figure out a woman’s risk of DCIS (ductal carcinoma in situ) coming back and/or the risk of a new invasive cancer developing in the same breast, as well as how likely she is to benefit from radiation therapy after DCIS surgery.
          </p>
          <p>
            Of all the breast cancer genomic tests, the Oncotype DX test has the strongest research behind it.
          </p>
          <label className="dx-label" htmlFor="dx-tests">Other Oncotype DX Tests:</label>
          <select id="dx-tests" className="dx-select">
            <option>Oncotype DX Breast Recurrence Score Test</option>
            <option>Oncotype Dx DCIS Recurrence Score Test</option>
            <option>Oncotype DX Colon Recurrence Score Test</option>
            <option>Oncotype DX Prostate Recurrence Score Test</option>
            <option>Afirma GEC</option>
          </select>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= FOUNDATION ONE CDx ================= */}
      <section className="foundation-section">
        <div className="foundation-copy">
          <h3>FoundationOne CDx</h3>
          <p>
            FoundationOne CDx is a broad companion diagnostic (CDx) that is clinically and analytically validated for solid tumors including: NSCLC, Colorectal, Breast, Ovarian, and Melanoma. The test is designed to provide physicians with clinically actionable information.
          </p>
          <p>
            To consider appropriate therapies for patients and understand results with evidence of resistance. Based on the individual genomic profile of each patient's cancer.
          </p>
          <p>
            Every test result includes microsatellite instability (MSI) and tumor mutational burden (TMB) to help inform immunotherapy decisions.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
        <div className="foundation-image">
          <img src={foundationImg} alt="FoundationOne CDx" />
          <p className="foundation-caption">
            A single test that analyzes all guideline-recommended genes in solid tumors, including companion diagnostic indications with a direct path to therapy.
            Results include MSI and TMB with the option to add PD-L1 testing to help inform immunotherapy decisions.
            Click here to learn more about FoundationOne CDx genomic test.
          </p>
        </div>
      </section>

      {/* ================= CANASSIST BREAST ================= */}
      <section className="dx-section">
        <div className="dx-image">
          <img src={canassistImg} alt="CanAssist Breast" />
        </div>
        <div className="dx-copy">
          <h3>CanAssist-Breast</h3>
          <p>
            CanAssist-Breast test helps clinicians formulate personalized therapeutic programs for their patients. The result is precision medicine that could shorten recovery time and improve the patients’ quality of life.
          </p>
          <p>
            CanAssist-Breast test provides additional information about the cancerous tumor. Along with the existing pathology report, this test result can help identify the likelihood of the cancer returning post-surgery and whether the patient is likely to benefit from adding chemotherapy to her hormone therapy.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= ONCQUEST ================= */}
      <section className="oncquest-section">
        <div className="oncquest-copy">
          <h3>Oncquest</h3>
          <p>
            India’s Largest Cancer Diagnostic Network with over 18 years of experience under its belt, College of American Pathology (CAP) and NABL accredited laboratory, Oncquest is known for its excellence in Molecular and Clinical Diagnostics.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>

          <div className="oncquest-dropdowns">
            <div className="oncquest-block">
              <label className="dx-label" htmlFor="oncquest-dx">Oncquest's Diagnosis Service:</label>
              <select id="oncquest-dx" className="dx-select">
                <option>Patient stratification for alternate therapy</option>
                <option>RQ-PCR assays for monitoring & Break point analysis of CML patients</option>
                <option>RQ-PCR based gene amplification assays for profiling of Ca. Breast</option>
                <option>Gene Sequencing – EGFR, GIST Mutation/ C-Kit Mutation</option>
              </select>
            </div>

            <div className="oncquest-block">
              <label className="dx-label" htmlFor="oncquest-first">Other First to Market Assays:</label>
              <select id="oncquest-first" className="dx-select">
                <option>RT-PCR based diagnostic assays</option>
                <option>FLT3: For AML prognostication</option>
                <option>JAK2: For Polycythemia Vera</option>
                <option>FIP1L1-PDGFRa: For Chronic Eosinophilic Leukemia</option>
                <option>NPM1: For AML’s with Normal Karyotyping</option>
                <option>FISH method for MLL gene rearrangement</option>
                <option>Flow Cytometry: PNH (Paroxysmal Nocturnal Hemoglobinuria)</option>
                <option>CD20 study: Patient stratification for Rituximab therapy</option>
                <option>CD52 study: Patient stratification for Campath1 therapy</option>
                <option>Zap 70 testing: For CLL</option>
                <option>CD138 testing: For Multiple Myeloma</option>
              </select>
            </div>
          </div>
        </div>
        <div className="oncquest-image">
          <img src={oncquestImg} alt="Oncquest Diagnostics" />
        </div>
      </section>

      {/* ================= 4BASECARE ================= */}
      <section className="basecare-section">
        <div className="basecare-image">
          <img src={basecareImg} alt="4baseCare Genomic Data" />
        </div>
        <div className="basecare-copy">
          <h3>4baseCare</h3>
          <p>
            4baseCare is a precision oncology company leveraging advanced genomic technologies to provide personalized cancer care.
            4BaseCare performs the DNA and RNA sequencing to generate high-quality somatic and germline molecular data. The results empower physicians to make data-driven personalized treatment decisions.
          </p>
          <div className="basecare-dropdowns">
            <div className="basecare-block">
              <label className="dx-label" htmlFor="somatic-genomics">Somatic Genomics Test:</label>
              <select id="somatic-genomics" className="dx-select">
                <option>
                  4BaseCare’s target portfolio tests are validated to identify somatic mutations in the tumour tissue with high sensitivity and specificity to detect even low frequency genomic alterations.
                </option>
              </select>
            </div>
            <div className="basecare-block">
              <label className="dx-label" htmlFor="hereditary-cancer">Hereditary Cancer Test:</label>
              <select id="hereditary-cancer" className="dx-select">
                <option>
                  The hereditary Cancer Risk test – Germline+ allows one to identify specific variations in the genes which are known to be associated with cancer.
                </option>
              </select>
            </div>
          </div>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

    </div>
  );
};

export default Diagnostics;
