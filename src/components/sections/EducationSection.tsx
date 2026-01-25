import ListBoxes from "../layout/ListBoxes";
import BoxExperience, {
  ExperienceDataInterface,
} from "../blocks/BoxExperience";

export default function EducationSection() {
  const educationData = [
    {
      title: "Master's in Mobile and Web Technologies",
      company: "University of Economics",
      location: "Varna, Bulgaria",
      date: " September 2023 - September 2024",
      description: [
        "Building web applications using NodeJS.",
        "Using MVC architecture and Laravel in building server-based web applications.",
        "Building mobile applications with React Native and Kotlin.",
        "Cybersecurity",
      ],
    },

    {
      title: "Bachelor of Computer systems and technologies",
      company: "Technical University",
      location: "Varna, Bulgaria",
      date: "September 2016 — June 2020",
      description: [
        "Programming basics.",
        "Web development basics.",
        "OOP fundamentals in general.",
        "Computer systems and architectures, and networks.",
        "Databases and SQL.",
      ],
    },

    {
      title: "Secondary education - High school",
      company: "MG Dr. Petar Beron",
      location: "Varna, Bulgaria",
      date: "September 2011 — May 2016",
      description: ["Information technology, Math, English/French"],
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container mx-auto">
        <p className="text-md text-secondary text-center uppercase">
          Education
        </p>
        <h2 className="mb-3 text-center">My Academic Journey</h2>
        <p className="mb-18 text-center">
          The educational milestones that laid the groundwork for my career in
          technology and software development.
        </p>
        <ListBoxes>
          {educationData.map((item, index) => (
            <BoxExperience key={index} data={item as ExperienceDataInterface} />
          ))}
        </ListBoxes>
      </div>
    </section>
  );
}
