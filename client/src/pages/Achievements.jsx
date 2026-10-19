import "../styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="contact">
      <div className="flex items-center gap-4 mt-12 ml-6 w-1/3">
        <h1 className="contact-title">MILESTONES</h1>
      </div>
      <div className="container-contact">
        <p className="contact-title-03">03</p>
        <h2 className="contact-title-02">
          Little milestones. <span>Big ambitions. </span>
        </h2>
        <div className="divider"></div>
        <div className="achieved">
          <h2 className="achieved-things">
            01 <span>Technovation Girls</span>
          </h2>
          <p className="achieved-description">Quaterfinalist</p>
        </div>
        <div className="divider"></div>
        <div className="achieved">
          <h2 className="achieved-things">
            02 <span>Hack Club</span>
          </h2>
          <p className="achieved-description">
            Project Building | Developer Community
          </p>
          <div className="divider"></div>
        </div>
        <div className="achieved">
          <h2 className="achieved-things">
            03 <span>SOF IMO</span>
          </h2>
          <p className="achieved-description">School Rank - 1</p>
        </div>
        <div className="divider"></div>
        <div className="achieved">
          <h2 className="achieved-things">
            04 <span>The Inkspirer</span>
          </h2>
          <p className="achieved-description">
            School Newsletter Design Recognition
          </p>
        </div>
        <div className="divider"></div>
        <p> </p>
      </div>
    </div>
  );
};

export default Achievements;
