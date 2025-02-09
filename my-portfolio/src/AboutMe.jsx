export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about_me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          As a full stack developer, I possess a diverse skill set that allows me to work on both the front-end and back-end of web applications.
           My expertise in technologies such as React, SQL, and MongoDB enables me to create dynamic and responsive user interfaces while ensuring
            efficient data management and server-side functionality.
          </p>
          <p className="hero--section-description">
          I am passionate about building seamless user experiences that prioritize accessibility and performance. 
          By employing best practices in user-centered design, I strive to deliver applications that are not only
           visually appealing but also intuitive and easy to navigate for all users.
          </p>
        </div>
      </div>
    </section>
  );
}
