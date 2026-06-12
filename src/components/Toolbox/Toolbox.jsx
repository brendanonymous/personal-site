import "./Toolbox.css"
import CoolCharacter from "../CoolCharacter/CoolCharacter"

const toolboxTitle = "My toolbox"

const logos = {
  light: {
    kafka: "/kafka-logo.png",
    aws: "/aws-logo.svg",
  },
  dark: {
    kafka: "/kafka-light-logo.png",
    aws: "/aws-light-logo.png",
  },
};

export default function Toolbox({ theme }) {
    const kafkaLogo = theme === "light" ? "kafka-logo.png" : "kafka-light-logo.png";
    const awsLogo = theme === "light" ? "aws-logo.svg" : "aws-light-logo.png";

    return (
        <section id="toolbox">
            <h1>
                {
                    toolboxTitle.split("").map((char, index) => (
                    <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
                    ))
                }
            </h1>
            <div className="toolbox-section">
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/python-logo.png`} alt="Python logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/go-logo.png`} alt="Go logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/react-logo.png`} alt="React logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/js-logo.png`} alt="Javascript logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/k8s-logo.png`} alt="Kubernetes logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/${kafkaLogo}`} alt="Kafka logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/bash-logo.png`} alt="Bash logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/pg-logo.png`} alt="Postgre logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/github-logo.png`} alt="Github logo" />
                <img className="tool-image" src={`${import.meta.env.BASE_URL}/${awsLogo}`} alt="AWS logo" />
            </div>
        </section>
    );
}
