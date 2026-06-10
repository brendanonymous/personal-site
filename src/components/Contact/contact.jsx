import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
      <div className="contact-icons">
        <a href={`${import.meta.env.BASE_URL}/resume.pdf`}>
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
  );
}