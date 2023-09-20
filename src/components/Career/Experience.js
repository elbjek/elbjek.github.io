import { Row, Col, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
library.add(fab);

export const data = [
  {
    company: "The Wellbeing Project | Wraw",
    location: "United Kingdom, (Remote)",
    position: "Full Stack Developer",
    start_date: "July 2021",
    end_date: "Present",
    description: `I functioned as an adept solo developer, with key technologies being used: NextJs/React, GraphQL, Apollo, MySQL, Strapi.io, Bootstrap.
    My responsibilities encompassed the end-to-end development process, from managing deployment pipelines and ensuring impeccable releases via rigorous QA to maintaining up-to-date documentation. 
     I actively contributed to design sprints, translating conceptual feature ideas and user flows into efficient code implementations. Leveraging tools like Figma and Illustrator, I elevated user experiences to new heights. Operating as a remote one-person team, I adeptly utilized Bitbucket, Docker, and AWS to optimize development and deployment workflows, showcasing a comprehensive skill set.`,
    icons: [
      { id: 1, title: "React25", icon: "fa-123" },
      { id: 2, title: "HTML5 Title", icon: "fa-123" },
      { id: 3, title: "React777", icon: "fa-666" },
      { id: 4, title: "HTML5 Title1", icon: "fa-31" },
    ],
    active: true,
    slug: "twp",
  },
  {
    company: "Platin Gaming Ltd",
    location: "Gzira, Malta",
    position: "Junior HTML5 Game Developer",
    start_date: "July 2020 ",
    end_date: "October 2020",
    description: `I collaborated with designers, and other developers, to transform PSD/Figma files into dynamic, responsive code. My hands-on proficiency with technologies such as HTML5, CSS3, Sass, and Webpack, coupled with my adeptness in Javascript, jQuery, and Typescript, allowed me to effectively maintain front-end issues across diverse slot gaming and local platforms. Leveraging tools like GitLab and Jira, I efficiently managed project workflows, showcasing my commitment to delivering high-quality outcomes in a fast-paced and multicultural environment.`,
    active: false,
    icons: [
      {
        id: 5,
        title: "React123",
        icon: "fa-56",
      },
    ],
    slug: "platingaming",
  },
  {
    company: "Target Traffic Ltd",
    location: "Floriana, Malta",
    position: "Frontend Developer",
    start_date: "September 2020 ",
    end_date: "June 2020",
    description: `I collaborated with designers, and other developers, to transform PSD/Figma files into dynamic, responsive code. My hands-on proficiency with technologies such as HTML5, CSS3, Sass, and Webpack, coupled with my adeptness in Javascript, jQuery, and Typescript, allowed me to effectively maintain front-end issues across diverse slot gaming and local platforms. Leveraging tools like GitLab and Jira, I efficiently managed project workflows, showcasing my commitment to delivering high-quality outcomes in a fast-paced and multicultural environment.`,
    icons: [
      {
        id: 6,
        title: "React6",
        icon: "fa-12234",
      },
      {
        id: 7,
        title: "HTML5 123",
        icon: "fa-32131",
      },
      {
        id: 8,
        title: "React44",
        icon: "fa-reac123t",
      },
      {
        id: 9,
        title: "HTML5234",
        icon: "fa-html51",
      },
    ],
    active: false,
    slug: "targettraffic",
  },
  {
    company: "Digital Mind Ltd",
    location: "Belgrade, Serbia",
    position: "Junior Frontend Developer / UI Designer",
    start_date: "July 2018",
    end_date: "September 2020",
    description: `At my first position, I spearheaded design-focused projects while nurturing a burgeoning interest in coding. I flourished in a multi-faceted role, creating interactive interfaces for Kinect and VR platforms, and crafting engaging promotional videos and social media content. A notable member of a team of 5+, my contributions were central to websites such as digitalmind.rs and vrallart.com.`,
    icons: [
      {
        id: 10,
        title: "React12",
        icon: "fa-react1",
      },
      {
        id: 11,
        title: "HTML453",
        icon: "fa-html6",
      },
      {
        id: 12,

        title: "React34",
        icon: "fa-react4",
      },
      {
        id: 13,
        title: "HTML5636",
        icon: "fa-html8",
      },
    ],
    active: false,
    slug: "digitalmind",
  },
  {
    company: "ISWiB - International Student Week in Belgrade",
    location: "Belgrade, Serbia",
    position: "Volunteer Designer",
    start_date: "September 2015",
    end_date: "October 2017",
    description: `In a vibrant, volunteer-driven setting, I took the reins in shaping the organization's 
    visual identity, leaving my mark on various aspects ranging from website layout to identity cards and Facebook posts. 
    Leveraging a toolkit comprising Adobe Illustrator, Photoshop, After Effects, Premiere Pro, and Adobe XD, I brought visual 
    concepts to life, often diving into the realms of HTML, Vanilla JavaScript, and CSS to ensure seamless implementation. 
    Working closely with a dedicated team, my contributions played a pivotal role in crafting a cohesive and engaging brand 
    presence, as vividly showcased on iswib.org.`,
    active: false,
    icons: [
      {
        id: 14,
        title: "React1223",
        icon: "fa-516",
      },
    ],
    slug: "iswib",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 215;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  useState(() => {
    setActiveIndex(0);
  });

  const handleClick = (direction) => {
    setActiveIndex((prevDirectionIndex) => {
      if (direction === "next") {
        if (prevDirectionIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevDirectionIndex + 1;
      }

      if (prevDirectionIndex - 1 < 0) {
        return data.length - 1;
      }
      return prevDirectionIndex - 1;
    });
  };
  const handleScroll = (e, activeIndex) => {
    console.log(e);
  };
  return (
    <div className="experience-container-content p-5">
      <Row className="align-items-center">
        <Col>
          <div className="carousel-wrapper">
            <Button onClick={() => handleClick("prev")}>Prev</Button>
            <div className="carousel">
              <div className="carousel-slides">
                <div
                  className="carousel-inner"
                  onScroll={(e) => {
                    handleScroll(activeIndex, e);
                  }}
                >
                  {data.map((item, index) => (
                    <div
                      className={`carousel-slide experience-container-item d-flex align-items-center justify-content-center ${
                        activeIndex === index ? "active font-2x" : "text-dimmed"
                      } ${
                        Math.abs(determinePlacement(index)) <=
                        visibleStyleThreshold
                          ? "visible"
                          : ""
                      }`}
                      key={`${index}_${item.company}`}
                      role="button"
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                      style={{
                        transform: `translateY(${determinePlacement(index)}px)`,
                      }}
                    >
                      <span
                        style={{
                          transform: `translateY(${determinePlacement(
                            index
                          )}px)`,
                        }}
                        key={`${index}_${item.company}_${item.slug}`}
                        className={` asset-arrows asset-arrows-double-vertical asset-arrows-double-vertical-top
                         
                          `}
                      ></span>
                      <div className="carousel-slide-block">
                        <div className="carousel-slide-heading">
                          <h4
                            className={`${
                              activeIndex === index ? "text-red" : ""
                            }`}
                          >
                            {item.company}
                          </h4>
                          <p>{item.location}</p>
                          <p>
                            {item.start_date} - {item.end_date}
                          </p>
                        </div>
                        {/* {index !== data.length - 1 && (
                          )} */}
                      </div>
                      <span
                        style={{
                          transform: `translateY(${determinePlacement(
                            index
                          )}px)`,
                        }}
                        className={` asset-arrows asset-arrows-double-vertical asset-arrows-double-vertical-bottom
                         
                          `}
                      ></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={() => handleClick("next")}>Next</Button>
          </div>
        </Col>

        <Col>
          {data.map((item, index) =>
            activeIndex === index ? (
              <div className="text-left" key={`${item.company}_${index}`}>
                {" "}
                <h5 className="">Key Technologies</h5>
                <div className="experience-container-icons d-flex">
                  {item.icons.map((icon) => (
                    <p
                      className="mx-2 d-inline-block text-red"
                      key={`${icon.title} + ${item.id}`}
                      style={{
                        fontSize: "20px",
                        width: "20px",
                      }}
                    >
                      {/* <FontAwesomeIcon icon={`fab ${icon.icon}`} /> */}
                    </p>
                  ))}
                </div>
                <h5>Description</h5>
                <p className="mt-4">{item.description}</p>
              </div>
            ) : null
          )}
        </Col>
      </Row>
    </div>
  );
}
