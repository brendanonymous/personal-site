import "./Hero.css";

const myName = "Brendan Lauck."

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Hello! My name is</p>

        <h1 className="hero-name">{myName}</h1>

        <h2 className="hero-subtitle">
            I build reliable backend systems, cloud infrastructure, and scalable web applications.
        </h2>

        <a
          className="hero-button"
          href="https://github.com/brendanonymous"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${import.meta.env.BASE_URL}/github-octocat-icon.png`} alt="github octocat icon" />
          My GitHub
        </a>
      </div>
    </section>
  );
}