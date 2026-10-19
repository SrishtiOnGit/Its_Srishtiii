import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p
        className="text-2xl font-bold p-4 rounded mt-12 ml-6 w-1/3"
        style={{ color: "var(--text)", backgroundColor: "var(--accent)" }}
      >
        STUDENT DEVELOPER. EXPLORING AI
      </p>
      <h1
        className="text-6xl font-bold p-4 rounded mt-12 ml-4  "
        style={{ color: "var(--text)" }}
      >
        Turning Ideas into{" "}
        <span style={{ color: "var(--accent)" }}>digital experiences.</span>
      </h1>
      <p
        className="text-2xl font-bold p-4 rounded mt-6 ml-6 "
        style={{ color: "var(--muted)" }}
      >
        Hi, I'm Srishti — a student developer exploring software engineering,
        artificial intelligence, and the art of building useful digital
        products. I enjoy turning ideas into working projects, learning by
        creating, and discovering how technology can solve real-world problems.
      </p>
      <button
        className=" text-xl  py-2 px-4 rounded mt-6 ml-7 mr-2.5 cursor-pointer"
        style={{ backgroundColor: "var(--accent)", color: "var(--text-2)" }}
        onClick={() => navigate("/projects")}
      >
        My Experience
      </button>
      <button
        className="text-xl py-2 px-4 rounded mt-6 ml-2.5 mr-7 cursor-pointer"
        style={{ backgroundColor: "var(--button)", color: "var(--text-2)" }}
        onClick={() => navigate("/about")}
      >
        More About Me
      </button>
    </div>
  );
};

export default Hero;
