import styles from "../styles/Skills.module.css";
import { Skillsbox } from "@/components/Skillsbox";

const arr = [
  {
    img: "Images/icon-javscript.png",
    title: "Javascript",
  },
  {
    img: "Images/icon-typescript.png",
    title: "Typescript",
  },
  {
    img: "Images/icon-react.png",
    title: "React",
  },
  {
    img: "Images/icon-nextjs.png",
    title: "Next.js",
  },
  {
    img: "Images/icon-nodejs.png",
    title: "Node.js",
  },
  {
    img: "Images/icon-express.png",
    title: "Express.js",
  },
  {
    img: "Images/icon-nest.png",
    title: "Nest.js",
  },
  {
    img: "Images/icon-socket.png",
    title: "Socket",
  },
  {
    img: "Images/icon-postgresql.png",
    title: "PostgreSQL",
  },
  {
    img: "Images/icon-mongodb.png",
    title: "MongoDB",
  },
  {
    img: "Images/icon-sass.png",
    title: "Sass/Scss",
  },
  {
    img: "Images/Clip path group.png",
    title: "Tailwindcss",
  },
  {
    img: "Images/icon-figma.png",
    title: "Figma",
  },
  {
    img: "Images/icon-cypress.png",
    title: "Cypress",
  },
  {
    img: "Images/icon-storybook.png",
    title: "Storybook",
  },
  {
    img: "Images/icon-git.png",
    title: "Git",
  },
];

export const Skills = () => {
  return (
    <div className={styles.titles}>
      <div>Skills</div>
      <div>The skills, tools and technologies I am really good at:</div>

      <div className={styles.skillscontainer}>
        <div className={styles.container}>
          {arr.map((item, index) => {
            return <Skillsbox key={index} {...item} />;
          })}
        </div>
      </div>
      <div className={styles.skillscontainer1}></div>
    </div>
  );
};
