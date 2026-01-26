import ListBoxes from "../layout/ListBoxes";
import BoxExperience, {
  ExperienceDataInterface,
} from "../blocks/BoxExperience";

export default function ExperienceSection() {
  const experienceData = [
    {
      title: "Front-end Next.js engineer",
      company: "iAffiliate",
      location: "Hybrid in Varna, Bulgaria",
      date: "May 2025 - Present",
      description: [
        "Develop and maintain a large-scale iGaming affiliate platform featuring multiple casino brands, games, and providers.",
        "Implement CMS pages and components using Sanity, enabling scalable content management.",
        "Delivered interactive UI components, data tables, and visualizations to improve user engagement.",
        "Integrated newsletter subscription functionality using Customer.io.",
        "Migrated a production project from Next.js to Astro, significantly improving performance and load times.",
        "Optimized image handling and reate low cost API queries using GraphQL.",
        "Collaborate with backend and designers to integrate new APIs and deliver consistent UI/UX.",
      ],
    },

    {
      title: "Freelance Web Developer",
      location: "Remote, Bulgaria",
      date: "January 2024 - March 2025",
      description: [
        "Development of personal projects linked with mobile applications and E-Commerce while I finish my master's degree.",
      ],
    },

    {
      title: "Junior Full Stack Developer",
      company: "Bulcode",
      location: "Sofia - Remote, Bulgaria",
      date: "April 2022 - October 2023",
      description: [
        "Developed and maintained web solutions using Drupal, React, Docker, and Next.js.",
        "Built custom Drupal modules and themes using Twig.",
        "Worked in Agile/Scrum environments with cross-functional teams.",
        "Expanded expertise in Tailwind CSS, Storybook, and component-based UI development.",
      ],
    },

    {
      title: "Front-end Developer",
      company: "2Create",
      location: "Varna - Remote, Bulgaria",
      date: "January 2021 — April 2022",
      description: [
        "Created 50+ pixel-perfect, responsive websites from PSD, XD, and Figma designs.",
        "Worked with Webpack, SCSS, LESS, Bootstrap, and JavaScript modules.",
        "Gained solid foundations in React, jQuery, and version control with Git.",
      ],
    },

    {
      title: "Intern Front-end Developer",
      location: "Varna, Bulgaria",
      date: "January 2021",
      description: [
        "Gained hands-on experience in HTML, CSS, and JavaScript to create responsive and interactive web interfaces.",
        "Worked with PHP - WordPress to develop dynamic themes and functionality.",
      ],
    },

    {
      title: "Intern SEO and Link building",
      company: "411 Marketing",
      location: "Varna, Bulgaria",
      date: "May 2018",
      description: [
        "Search engine optimization",
        "WordPress editing",
        "Google Analytics, AdWords",
      ],
    },
  ];

  return (
    <section id="experience" className="section scroll-mt-20">
      <div className="container mx-auto">
        <p className="text-md text-secondary text-center uppercase">
          Experience
        </p>
        <h2 className="mb-3 text-center">Gained experience over the years</h2>
        <p className="mb-18 text-center">
          Here is a list of the companies where I worked.
          <br />I have used different technologies and tools, and I am always
          looking for new challenges.
        </p>
        <ListBoxes>
          {experienceData.map((item, index) => (
            <BoxExperience key={index} data={item as ExperienceDataInterface} />
          ))}
        </ListBoxes>
      </div>
    </section>
  );
}
