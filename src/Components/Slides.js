import Project from "Components/Project.js";
import computer from "Images/computer.png";
import logo__project__portfolioSite from "Images/Logos/Projects/logo__project__portfolio-site.png";
import logo__project__liberty from "Images/Logos/Projects/logo__project__liberty.png";
import logo__project__skilltrain from "Images/Logos/Projects/logo__project__skilltrain.png";
import logo__project__fruity from "Images/Logos/Projects/logo__project__fruity.png";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import getRotation from "Utility/getRotation";
import VARIABLES from "../_variables.module.sass";
import "./Slides.sass";

const slideRotationInterval = parseInt(VARIABLES["slide-rotation-interval"]);
const numberOfProjects = parseInt(VARIABLES["number-of-projects"]);
const numberOfSlides = parseInt(VARIABLES["number-of-slides"]);

const scrollYProjectStart =
  process.env.REACT_APP_SCROLL_Y_SCALE * slideRotationInterval; // Work backwards to find scrollY of start of project
const scrollYProjectEnd =
  scrollYProjectStart +
  process.env.REACT_APP_SCROLL_Y_SCALE *
    (numberOfProjects * slideRotationInterval); // Likewise

const Slides = (props) => {
  const { scrollY } = props;
  const rotation = getRotation({ scrollY, slidesOrPlanet: "slides" });
  const [selectedProject, setSelectedProject] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) setTimeout(() => setTransitioning(false), 600);
  }, [transitioning]);

  if (scrollY > scrollYProjectStart && scrollY < scrollYProjectEnd) {
    let i = numberOfProjects;
    while (i) {
      const projectIndex = numberOfProjects - i;
      const limit =
        scrollYProjectStart + (projectIndex + 1) * slideRotationInterval * 8;
      if (scrollY < limit) {
        if (selectedProject !== projectIndex) {
          setSelectedProject(projectIndex);
          setTransitioning(true);
        }
        break;
      }
      i--;
    }
  }

  return (
    <div className="Slides" style={{ transform: `rotate(${rotation}deg)` }}>
      {Array(numberOfSlides)
        .fill("")
        .map((_, i) => (
          <div className="Slide">
            {i === 0 ? (
              <div>
                {/* Creates a div with real dimensions within the padded container */}
                <h2>About</h2>
              </div>
            ) : i === 1 ? (
              <div>
                <Carousel
                  className="carousel-root--projects carousel-root--projects--blurb"
                  selectedItem={selectedProject}
                  showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  transitionTime={600}
                >
                  <Project
                    description="The website you are looking at"
                    technologies={["react", "sass"]}
                    title="This Site"
                  />
                  <Project
                    description="A website serving as a portal to a business-facing online 3D
                    exhibition MMO game, complete with various social media
                    capabilities, customer service integration, game file
                    editor, and more. Sole responsibility for the entire
                    site/stack. Technologies Used: javascript, react, node,
                    html, css, jest, joi, linux (ubuntu dist), ssh (key
                    management), mongo, ssl, git, npm. Highlights include: A
                    chat system with email notifications and file embedding. A
                    dynamic svg editor for game admins to manipulate an in-game
                    map in real-time. A news feed with a WYSIWYG text editor
                    including locale support etc."
                    technologies={[
                      "ubuntu",
                      "mongo",
                      "node",
                      "express",
                      "react"
                    ]}
                    title="Liberty"
                  />
                  <Project
                    description="A mobile based full-stack application with an inhouse
                    booking system alongside real time video and text chat for
                    fitness In-depth authentication system in Dart with
                    connection to AWS Cognito via Amplify. Completed
                    integration of a payment API (Stripe) with full signups,
                    payments, and payouts deployed to AWS. Payments through
                    Android native pay, iOS native pay, or an in-app window.
                    Demonstration (YouTube): Introduction Demo"
                    technologies={["aws", "mongo", "dart", "flutter", "react"]}
                    title="SkillTrain"
                  />
                  <Project
                    description="A browser based application where users can group up and import a large crate of exotic food to split with other locals who want a piece of the action."
                    technologies={["node", "express", "react"]}
                    title="Fruity"
                  />
                </Carousel>
                <img className="computer" src={computer} />
                <div className="computer__projects">
                  <div className="noise">
                    <div
                      className="noisy"
                      style={transitioning ? {} : { visibility: "hidden" }}
                    />
                    <svg>
                      <filter id="noise">
                        <feTurbulence id="turbulence">
                          <animate
                            attributeName="baseFrequency"
                            dur="50s"
                            values="0.9 0.9;0.8 0.8; 0.9 0.9"
                            repeatCount="indefinite"
                          />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="60" />
                      </filter>
                    </svg>
                  </div>
                  <div
                    className="items"
                    style={transitioning ? { display: "none" } : {}}
                  >
                    <Carousel
                      className="carousel-root--projects carousel-root--projects--logo"
                      selectedItem={selectedProject}
                      showThumbs={false}
                      showArrows={false}
                      showStatus={false}
                      showIndicators={false}
                      transitionTime={600}
                    >
                      <div>
                        <img
                          className="computer__project"
                          src={logo__project__portfolioSite}
                        />
                      </div>
                      <div>
                        <img
                          className="computer__project"
                          src={logo__project__liberty}
                        />
                      </div>
                      <div>
                        <img
                          className="computer__project"
                          src={logo__project__skilltrain}
                        />
                      </div>
                      <div>
                        <img
                          className="computer__project"
                          src={logo__project__fruity}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
    </div>
  );
};

export default Slides;
