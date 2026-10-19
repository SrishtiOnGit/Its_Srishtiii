import MyImg from "../assets/MyImg.png";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-12 ml-6 w-1/3">
        <p className="text-lg rounded text-(--accent)">ABOUT ME</p>

        <div className="grow border-t border-(--border)"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
        <img
          src={MyImg}
          alt="MyImg"
          className="ml-6 block rounded-full w-64 max-w-full h-auto border-6 border-(--accent)"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-lg rounded text-(--accent)">01</p>

            <div className="title-about"></div>

            <h2 className="title">A little more about me</h2>
          </div>

          <p className="para">
            I'm a student developer who enjoys turning ideas into working
            digital experiences. I'm exploring software engineering and AI,
            learning through projects, and figuring out how technology can make
            a meaningful difference.
            <br />
            <br />
            I’m especially interested in building thoughtful products—from
            polished interfaces to the backend systems that make them work. I
            believe the best way to learn is to build, experiment, and keep
            improving.
          </p>

          <div className="interests-cont">
            <h2 className="interests-title">— Interests —</h2>
            <div className="interest">
              <p className="interests">Full Stack Development</p>
              <p className="interests">Artificial Intelligence</p>
              <p className="interests">Creative Coding</p>
              <p className="interests">Social Impact</p>
            </div>
          </div>
          <div className="interests-cont">
            <h2 className="interests-title">— Currently Learning —</h2>
            <div className="interest">
              <p className="interests">React</p>
              <p className="interests">TypeScript</p>
              <p className="interests">Backend Engineering</p>
              <p className="interests">C++</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
