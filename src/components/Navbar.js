import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Navbar() {
  const data = [
    {
      title: "SAE Institute Belgrade",
      location: "Belgrade, Serbia",
      start_date: "2017",
      end_date: "2020",
      degree: "Bachelor of Science in Web Development",
    },
    {
      title: "Belgrade Polytechnic",
      location: "Belgrade, Serbia",
      start_date: "2014",
      end_date: "2018",
      degree: "Bachelor of Arts in Design",
    },
  ];
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <div>
      <Button
        variant="link"
        className={`nav-burger p-0 ${isNavVisible ? "active" : ""}`}
        role="button"
        onClick={() => {
          setIsNavVisible(!isNavVisible);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Button>
      <nav className={`navbar-side  ${isNavVisible ? "visible" : ""}`}>
        <ul className="p-0 h-100">
          <li>
            <a href="#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="#career" className="">
              Career
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="">
              En
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
