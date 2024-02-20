import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }>
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }>
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }>
              Hi there! I'm <span className="text-primary">Raeann Tsui</span>.
              Welcome to my porfolio!
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I recently graduated from App Academy, a software engineering
              bootcamp, after pursuing a career in medicine. Transitioning from
              my initial career path as a Physician Assistant (PA) to software
              engineering was driven by my desire for greater flexibility and
              creative expression. While my role as a PA fulfilled my passion
              for problem-solving and direct patient care, I wanted an avenue to
              explore my creativity further. Through extensive research, I
              discovered that software engineering not only aligned with my core
              values but also offered the opportunity for continuous learning
              and growth. Although I no longer engage in face-to-face
              interactions with patients, I firmly believe code bears the same
              impact to improve the lives of others. This belief has fueled my
              enthusiasm for the transition, despite the challenges and
              uncertainties that lied ahead leaving a profession I invested so
              many financial and time in. Moving forward, I am excited to apply
              the knowledge and skills acquired during my PA training and
              bootcamp training to the professional world of software
              engineering. I see this transition not as a departure from my
              previous career, but as an evolution that allows me to leverage my
              experiences and expertise in new and innovative ways. With an open
              mind and a dedication to lifelong learning, I eagerly anticipate
              the possibilities that await me in this dynamic and ever-changing
              field.
            </p>{" "}
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }>
                <li>
                  <span className="fw-600 me-2">Name:</span>Raeann Tsui
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">raeann.tsui@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>27
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Pittsburgh, PA
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill">
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }>
          {/* <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }>
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }>
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }>
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }>
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
