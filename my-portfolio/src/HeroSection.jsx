export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            <em>Hey, I'm Kalab</em>
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Full stack Website Developer
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            I specialize in creating seamless user experiences using React, SQL,
            and MongoDB. I believe in a user-centered design approach that
            prioritizes accessibility and responsiveness
            <br />
            If you're looking for a passionate deve bring your ideas to life,
            feel free to reach out!
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="/main_page_img.gif" alt="Hero Section" />
      </div>
    </section>
  );
}
