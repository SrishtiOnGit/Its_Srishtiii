import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-12 ml-6 w-1/3">
        <h1 className="contact-title">EXPERIENCE</h1>
      </div>
      <div className="container-contact">
        <p className="contact-title-03">03</p>
        <h2 className="contact-title-02">
          Learning by doing.<span> Growing by building. </span>
        </h2>
        <div className="divider"></div>
        <div className="achieved">
          <h2 className="achieved-things">
            01 <span>Technovation Girls</span>
          </h2>
          <p className="achieved-description">Student Ambassador</p>
        </div>
        <div className="divider"></div>
        <div className="achieved">
          <h2 className="achieved-things">
            02 <span>Sharda International School</span>
          </h2>
          <p className="achieved-description">Club Operational Leader</p>
        </div>
        <div className="divider"></div>
        <div className="achieved">
          <h2 className="achieved-things">
            04 <span>Sharda International School</span>
          </h2>
          <p className="achieved-description">
            Official Newsletter Designing Team Leader{" "}
          </p>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Experience;
