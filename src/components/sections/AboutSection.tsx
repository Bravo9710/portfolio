import {
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiLess,
  SiBootstrap,
  SiBem,
  SiNodedotjs,
  SiSentry,
  SiVercel,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiStorybook,
  SiJquery,
  SiPhp,
  SiLaravel,
  SiSanity,
  SiWordpress,
  SiDrupal,
  SiMysql,
  SiMongodb,
  SiNpm,
  SiYarn,
  SiVite,
  SiPnpm,
  SiDocker,
} from "react-icons/si";
import LogosPreview from "../layout/LogosPreview";

export default function AboutSection() {
  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
    },
    {
      node: <SiAstro />,
      title: "Astro",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      node: <SiHtml5 />,
      title: "HTML5",
    },
    {
      node: <SiCss3 />,
      title: "CSS3",
    },
    {
      node: <SiSass />,
      title: "Sass",
    },
    {
      node: <SiLess />,
      title: "Less",
    },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
    },
    {
      node: <SiBem />,
      title: "BEM",
    },
    {
      node: <SiNodedotjs />,
      title: "Node.js",
    },
    {
      node: <SiSentry />,
      title: "Sentry",
    },
    {
      node: <SiVercel />,
      title: "Vercel",
    },
    {
      node: <SiGithub />,
      title: "GitHub",
    },
    {
      node: <SiGitlab />,
      title: "GitLab",
    },
    {
      node: <SiFigma />,
      title: "Figma",
    },
    {
      node: <SiStorybook />,
      title: "Storybook",
    },
    {
      node: <SiJquery />,
      title: "jQuery",
    },
    {
      node: <SiPhp />,
      title: "PHP",
    },
    {
      node: <SiLaravel />,
      title: "Laravel",
    },
    {
      node: <SiSanity />,
      title: "Sanity",
    },
    {
      node: <SiWordpress />,
      title: "WordPress",
    },
    {
      node: <SiDrupal />,
      title: "Drupal",
    },
    {
      node: <SiMysql />,
      title: "MySQL",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
    },
    {
      node: <SiNpm />,
      title: "npm",
    },
    {
      node: <SiYarn />,
      title: "Yarn",
    },
    {
      node: <SiVite />,
      title: "Vite",
    },
    {
      node: <SiPnpm />,
      title: "pnpm",
    },
    {
      node: <SiDocker />,
      title: "Docker",
    },
  ];

  return (
    <section className="py-20 section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            <p>
              I am a software developer with a passion for creating innovative
              and user-friendly applications. I have experience working with a
              variety of technologies and frameworks, and I am always looking
              for new ways to improve my skills and knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">What I do?</h3>
            <p>
              I specialize in building modern, responsive, and scalable web
              applications using the latest technologies. I am particularly
              skilled in React, Next.js, and TypeScript, and I enjoy creating
              engaging and interactive user interfaces.
            </p>
          </div>
        </div>
        <LogosPreview
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={10}
          scaleOnHover
          fadeOut
          fadeOutColor="#0f0f0f"
          ariaLabel="Technology skills"
        />
      </div>
    </section>
  );
}
