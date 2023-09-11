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
  return (
    <nav className="navbar-side py-5">
      <ul className="p-0 h-100">
        <li>
          <a href="" className="">
            About
          </a>
        </li>
        <li>
          <a href="" className="">
            Projects
          </a>
        </li>
        <li>
          <a href="" className="">
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
  );
}
