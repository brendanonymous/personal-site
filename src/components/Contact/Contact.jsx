import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import "./Contact.css";
import CoolCharacter from "../CoolCharacter/CoolCharacter";

const contactTitle = "Reach out"

export default function Contact() {
  return (
    <section id="contact">
        <h1>
          {
            contactTitle.split("").map((char, index) => (
              <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
            ))
          }
        </h1>
        <div className="contact-icons">
            <a
                href={`${import.meta.env.BASE_URL}/resume.pdf`}
                target="_blank"
                rel="noreferrer"
            >
                <FaFilePdf size={50} />
            </a>

            <a
                href="https://github.com/brendanonymous"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub size={50} />
            </a>

            <a
                href="https://www.linkedin.com/in/brendanlauck/"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin size={50} />
            </a>

            <a href="mailto:brendanlauck@yahoo.com">
                <FaEnvelope size={50} />
            </a>
        </div>
    </section>
      
  );
}