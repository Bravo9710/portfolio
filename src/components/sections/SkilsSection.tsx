import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiNodedotjs,
  SiPhp,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import ListLines from "../layout/ListLines";
import {
  FaBugSlash,
  FaCode,
  FaComments,
  FaPeopleCarryBox,
  FaUsersGear,
} from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";

export default function SkilsSection() {
  const coreSkillsList = [
    { name: "React", percent: 95, icon: <SiReact /> },
    {
      name: "Next.js",
      percent: 90,
      icon: <SiNextdotjs />,
    },
    {
      name: "JavaScript",
      percent: 92,
      icon: <SiJavascript />,
    },
    {
      name: "TypeScript",
      percent: 88,
      icon: <SiTypescript />,
    },
    {
      name: "Tailwind CSS",
      percent: 97,
      icon: <SiTailwindcss />,
    },
  ];

  const sideSkillsList = [
    { name: "Node.js", percent: 73, icon: <SiNodedotjs /> },
    {
      name: "React Native",
      percent: 65,
      icon: <SiReact />,
    },
    {
      name: "Astro",
      percent: 76,
      icon: <SiAstro />,
    },
    {
      name: "PHP/Laravel",
      percent: 61,
      icon: <SiPhp />,
    },
    {
      name: "Beckend",
      percent: 71,
      icon: <FaCode />,
    },
  ];

  const softSkillsList = [
    { name: "Teamwork", percent: 96, icon: <FaPeopleCarryBox /> },
    { name: "Communication", percent: 96, icon: <FaComments /> },
    { name: "Problem-solving", percent: 91, icon: <FaBugSlash /> },
    { name: "Adaptability", percent: 94, icon: <FaUsersGear /> },
    { name: "Time management", percent: 87, icon: <LuCalendarClock /> },
  ];
  return (
    <section id="skills" className="section">
      <p className="text-md text-secondary text-center uppercase">Skills</p>
      <h2 className="mb-3 text-center">Technical Proficiency</h2>
      <p className="mb-18 text-center">
        A comprehensive overview of the technologies, frameworks, and tools I
        leverage to build scalable web applications and manage projects
        efficiently.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <ListLines title="Core Skills" items={coreSkillsList} />
        <ListLines title="Side Skills" items={sideSkillsList} />
        <ListLines title="Soft Skills" items={softSkillsList} />
      </div>
    </section>
  );
}
