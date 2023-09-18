import { Row } from "react-bootstrap";

export default function Experience() {
  return (
    <div className="experience-container p-5">
      <Row className="align-items-center">
        <div className="col-6">
          <div className="experience-container-item">
            <h4 className="text-red">Target Traffic</h4>
            <p>Bachelor of Science in Web Development</p>
            <p>Completed in 2020</p>
          </div>
          <div className="experience-container-item active font-2x">
            <h4 className="text-red">Target Traffic</h4>
            <p>Bachelor of Science in Web Development</p>
            <p>Completed in 2020</p>
          </div>
          <div className="experience-container-item">
            <h4 className="text-red">Target Traffic</h4>
            <p>Bachelor of Science in Web Development</p>
            <p>Completed in 2020</p>
          </div>
        </div>
        <div className="col-6 text-left">
          <h5 className="">Key Technologies</h5>
          <div className="experience-container-icons d-flex">
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
          <h5 className="mt-4">Description</h5>
          <p>
            I functioned as an adept solo developer, with key technologies being
            used: NextJs/React, GraphQL, Apollo, MySQL, Strapi.io, Bootstrap. My
            responsibilities encompassed the end-to-end development process,
            from managing deployment pipelines and ensuring impeccable releases
            via rigorous QA to maintaining up-to-date documentation. I actively
            contributed to design sprints, translating conceptual feature ideas
            and user flows into efficient code implementations. Leveraging tools
            like Figma and Illustrator, I elevated user experiences to new
            heights. Operating as a remote one-person team, I adeptly utilized
            Bitbucket, Docker, and AWS to optimize development and deployment
            workflows, showcasing a comprehensive skill set.
          </p>
        </div>
      </Row>
    </div>
  );
}
