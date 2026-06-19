import CoolCharacter from "../CoolCharacter/CoolCharacter";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css" 

const projectsTitle = "Projects"

export default function Projects(){
    return (
        <section id="projects">
            <h1>
                {
                    projectsTitle.split("").map((char, index) => (
                        <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
                    ))
                }
            </h1>
            <ProjectCard
                title="JobFlow (🚧 In Progress)"
                description="A web app for visualizing application pipeline data."
                tech={["React", "FastAPI", "AWS", "PostgreSQL"]}
                image={`${import.meta.env.BASE_URL}/sankey.png`}
                websiteUrl="https://brendanonymous.github.io/personal-site/"
                sourceUrl="https://github.com/brendanonymous/jobflow"
            />
            <ProjectCard
                title="Pop Topics"
                description="A full-stack web application that aggregates trending topics from Reddit and other online communities, helping users discover emerging discussions and content in real time."
                tech={["React", "Go", "AWS"]}
                image={`${import.meta.env.BASE_URL}/pop-topics-bubbles.png`}
                websiteUrl="https://brendanonymous.github.io/pop-topics/"
                sourceUrl="https://github.com/brendanonymous/pop-topics"
            />
        </section>
    );
}
