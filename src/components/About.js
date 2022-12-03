import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/4.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={12} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Jurney
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={40} />
                    </h3>
                    <span className="name">
                      +
                      <br />
                      Publications
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Professor`}</span>
                <h3>I have been teaching since 2016</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>Hello there! I'm an Assistan Professor, and I'm very passionate and dedicated to my work.
                   With  several years research experience as a postdoctoral Professor , I have acquired the
                    skills and knowledge necessary to make a research successful . And I have been teaching
                     as an assistant professor in University of Illinois at Urbana-Champaign since 2016 till 
                     now .</p>
                <h4>Academic Positions</h4>
                <p>&bull;
                  {` Assistant Professor, University of Illinois at Urbana-Champaign, 2016-present`}
                </p>
                <p>&bull;
                  {` Postdoctoral Researcher, ETH Zurich, 2014-2016, advisor: Torsten Hoefler`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
