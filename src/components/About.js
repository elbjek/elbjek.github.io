import Navbar from "@/components/Navbar";

export default function About() {
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
    <div className="position-relative">
      <Navbar />
      <div className=" about-container p-5 d-flex align-items-center">
        <div className="container">
          <div className="about-container-heading m-auto">
            <h2>About</h2>
            <p className="pt-4">
              Experienced web developer and designer with a proven track record
              in translating design visions into seamless, responsive code.
              Proficient in HTML5, CSS3, JavaScript, and React, complemented by
              a creative background in visual arts. Ready to contribute
              innovative solutions and enhance user experiences in dynamic
              projects.
            </p>
          </div>
          <div className="about-info d-flex align-items-center justify-content-center pt-5">
            {data.map((item, index) => (
              <>
                <div className={` text-center`} key={`${index}_${item.title}`}>
                  <h3>{item.title}</h3>
                  <p className="pb-0 mb-0">{item.location}</p>
                  <p className="pb-0 mb-0">{item.degree}</p>
                  <p className="pb-0 mb-0">Completed in {item.end_date}</p>
                </div>
                {index !== data.length - 1 && (
                  <span className="asset-arrows asset-arrows-blue"></span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
