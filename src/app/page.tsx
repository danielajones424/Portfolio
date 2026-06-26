export default function Home() {


  return (
    <div>
    <header>
        <nav>
                <a className="text-ink hover:text-accent" href="#about" >About</a>
                <a className="text-ink hover:text-accent" href="#experience" >Experience</a>
                <a className="text-ink hover:text-accent" href="#projects" >Projects</a>
                <a className="text-ink hover:text-accent" href="#contact">Contact</a>
        </nav>
    </header>
      <main>
        <section id="hero" className="min-h-screen">
        <h1 className="text-4xl font-bold">
          Daniel Jones — Full Stack Engineer
        </h1>
        <p className="text-lg text-ink-muted italic">
          From configuring cloud servers to writing clean 
          frontend code, I bridge the gap between reliable IT infrastructure and 
          high-performance applications.
        </p>
        </section>
        <section id="about" className="min-h-screen">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>
            Hello! I'm Daniel, a passionate web developer with a love for creating beautiful and functional websites. I specialize in front-end development and have experience with various web technologies.
          </p>
        </section>
        <section id="experience" className="min-h-screen">
          <h2 className="text-2xl font-bold">Experience</h2>
          <p>
            I have worked with various technologies and frameworks to create responsive and user-friendly websites.
          </p>
        </section>
        <section id="projects" className="min-h-screen">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p>
            Here are some of the projects I've worked on:
          </p>
        </section>
        <section id="contact" className="min-h-screen">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p>
            Feel free to reach out to me via email at <a className="text-accent hover:text-ink underline" href="mailto:daniel@example.com">daniel@example.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
