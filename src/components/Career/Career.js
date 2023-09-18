import Experience from "./Experience";
import Projects from "./Projects";
import { useState } from "react";

export default function Career() {
  const [isTabActive, setIsTabActive] = useState("experience");
  useState(() => {
    setIsTabActive("experience");
  });
  const setActiveTab = (tab) => {
    setIsTabActive(tab);
  };
  return (
    <div className="experience-container text-center  p-5">
      <div className="d-flex justify-content-center">
        <h2
          className={`${
            isTabActive === "experience" ? "text-white" : "text-dimmed"
          }`}
          role="button"
          onClick={() => {
            setActiveTab("experience");
          }}
        >
          Experience
        </h2>
        <h2
          className={`${
            isTabActive === "projects" ? "text-white" : "text-dimmed"
          }`}
          role="button"
          onClick={() => {
            setActiveTab("projects");
          }}
        >
          Projects
        </h2>
      </div>
      {isTabActive === "experience" && <Experience />}
      {isTabActive === "projects" && <Projects />}
    </div>
  );
}
