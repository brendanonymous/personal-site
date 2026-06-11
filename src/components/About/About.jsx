import "./About.css";
import CoolCharacter from "../CoolCharacter/CoolCharacter";

const aboutTitle = "About me"

export default function About() {
    return (
        <section id="about">
            <h1>
                {
                    aboutTitle.split("").map((char, index) => (
                    <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
                    ))
                }
            </h1>
            <div className="about-me-section">
                <p className="about-me-summary">
                    I'm a software engineer with 7+ years of experience building backend services, cloud infrastructure, and full-stack applications. I'm particularly interested in distributed systems, reliability, and designing software that continues to perform under scale. Outside of engineering, I train Brazilian Jiu-Jitsu, travel, and build side projects to explore new technologies and sharpen my skills.
                </p>
                <img className="about-me-image" src={`${import.meta.env.BASE_URL}/me.jpeg`} alt="A picture of a pensive Brendan" />
            </div>
        </section>
    );
}
