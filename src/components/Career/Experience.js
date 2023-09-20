import { Row, Col, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
library.add(fab);

export const data = [
  {
    company: "Target Traffic Ltd",
    location: "Floriana, Malta",
    position: "Junior Frontend Developer",
    start_date: "September 2019",
    end_date: "February 2020",
    description: `I demonstrated and gained skill in developing interactive and responsive layouts, facilitating cohesive collaboration with designers and backend developers in a global environment.
    This role helped me gain a robust understanding of  technologies like Vanilla JavaScript, PugJs, and NuxtJs, along with honing skills in CSS and HTML, which became fundamental in enhancing project development processes. My acquired proficiency in utilizing Adobe Illustrator and Figma played a decisive role in the fruitful completion of projects such as estaformular.org, travelicia.de, and estaform.org. Furthermore, I embraced platforms like Bitbucket and Jira to facilitate cohesive and streamlined project workflows.`,
    active: false,
    icons: [
      {
        title: "React123",
        icon: "fa-56",
      },
    ],
    slug: "targettraffic",
  },
  {
    company: "The Wellbeing Project",
    location: "United Kingdom, (Remote)",
    position: "Junior Frontend Developer",
    start_date: "06/2021",
    end_date: "Present",
    description: `I functioned as an adept solo developer, with key technologies being used: NextJs/React, GraphQL, Apollo, MySQL, Strapi.io, Bootstrap.
    My responsibilities encompassed the end-to-end development process, from managing deployment pipelines and ensuring impeccable releases via rigorous QA to maintaining up-to-date documentation. 
     I actively contributed to design sprints, translating conceptual feature ideas and user flows into efficient code implementations. Leveraging tools like Figma and Illustrator, I elevated user experiences to new heights. Operating as a remote one-person team, I adeptly utilized Bitbucket, 
     Docker, and AWS to optimize development and deployment workflows, showcasing a comprehensive skill set.`,
    icons: [
      {
        title: "React25",
        icon: "fa-123",
      },
      {
        title: "HTML5 Title",
        icon: "fa-123",
      },
      {
        title: "React777",
        icon: "fa-666",
      },
      {
        title: "HTML5 Title1",
        icon: "fa-31",
      },
    ],
    active: true,
    slug: "twp",
  },
  {
    company: "Digital Mind",
    location: "Belgrade, Serbia",
    position: "Junior Frontend Developer / UI Designer",
    start_date: "06/2021",
    end_date: "Present",
    description: `Digital mind description`,
    icons: [
      {
        title: "React6",
        icon: "fa-12234",
      },
      {
        title: "HTML5 123",
        icon: "fa-32131",
      },
      {
        title: "React44",
        icon: "fa-reac123t",
      },
      {
        title: "HTML5234",
        icon: "fa-html51",
      },
    ],
    active: false,
    slug: "digitalmind",
  },
  {
    company: "Fourth item",
    location: "Belgrade, Serbia",
    position: "Junior Frontend Developer / UI Designer",
    start_date: "06/2021",
    end_date: "Present",
    description: `Fourth item description.Fourth item description.Fourth item description.
    Fourth item description.Fourth item description.Fourth item description.Fourth item description.
    Fourth item description.Fourth item description.Fourth item description.
    Fourth item description.Fourth item description.Fourth item description.Fourth item description.Fourth item 
    description.Fourth item description.Fourth item description.
    Fourth item description.Fourth item description.Fourth item description.Fourth item description.`,
    icons: [
      {
        title: "React12",
        icon: "fa-react1",
      },
      {
        title: "HTML453",
        icon: "fa-html6",
      },
      {
        title: "React34",
        icon: "fa-react4",
      },
      {
        title: "HTML5636",
        icon: "fa-html8",
      },
    ],
    active: false,
    slug: "fourthitem",
  },
  {
    company: "Fifth Item",
    location: "Floriana, Malta",
    position: "Junior Frontend Developer",
    start_date: "September 2019",
    end_date: "February 2020",
    description: `I demonstrated and gained skill in developing interactive and responsive layouts, facilitating cohesive collaboration with designers and backend developers in a global environment.
    This role helped me gain a robust understanding of  technologies like Vanilla JavaScript, PugJs, and NuxtJs, along with honing skills in CSS and HTML, which became fundamental in enhancing project development processes. My acquired proficiency in utilizing Adobe Illustrator and Figma played a decisive role in the fruitful completion of projects such as estaformular.org, travelicia.de, and estaform.org. Furthermore, I embraced platforms like Bitbucket and Jira to facilitate cohesive and streamlined project workflows.`,
    active: false,
    icons: [
      {
        title: "React1223",
        icon: "fa-516",
      },
    ],
    slug: "fifthitem",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 100;

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
    setActiveIndex(1);
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
                      className={`carousel-slide experience-container-item ${
                        activeIndex === index ? "active font-2x" : ""
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
                      <h4
                        className={`${activeIndex === index ? "text-red" : ""}`}
                      >
                        {item.company}
                      </h4>
                      <p>{}</p>
                      <p>
                        {item.start_date} - {item.end_date}
                      </p>
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
              <>
                <div className="text-left" key={`${item.company}_${index}`}>
                  {" "}
                  <h5 className="">Key Technologies</h5>
                  <div className="experience-container-icons d-flex">
                    {item.icons.map((icon) => (
                      <p
                        className="mx-2 d-inline-block text-red"
                        key={`${icon.title} + ${index + 1}`}
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
              </>
            ) : null
          )}
        </Col>
      </Row>
    </div>
  );
}
