import "../styles/Contact.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="flex items-center gap-4 mt-12 ml-6 w-1/3">
        <h2 className="contact-title">GET IN TOUCH</h2>
      </div>

      <div className="container-contact">
        <p className="contact-title-03">02</p>
        <h2 className="contact-title-02">
          Have something <span>in mind? </span> Let's connect.
        </h2>
        <div className="flex items-center gap-4 mt-6 ml-6 w-1/3">
          <div className="other-links">
            <btn className="contact-btn">
              <a
                href="https://www.linkedin.com/in/srishti-srivastava-177882442"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hello{" "}
              </a>
            </btn>
            <div className="divider"></div>
            <div className="other-links-02">
              <p className="contacts">
                {" "}
                <a href="https://github.com/SrishtiOnGit/">
                  <FaGithub size={40} />
                </a>
              </p>
              <p className="contacts">
                {" "}
                <a href="mailto:srishtisrivastava3008@gmail.com">
                  <MdEmail size={40} />
                </a>
              </p>
              <p className="contacts" onClick="copyDiscordUser(srishti3008)">
                {" "}
                <FaDiscord size={40} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
