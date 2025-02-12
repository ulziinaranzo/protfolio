import styles from "../styles/Work.module.css";
import { Titles } from "@/components/Titles";
import { Workcard } from "./Workcard";
const arr = [
  {
    img: "Images/Picture0.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: "Images/Small-icon.png",
  },
  {
    img: "Images/Picture1.png",
    title: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: "Images/Small-icon.png",
  },
  {
    img: "Images/Picture2.png",
    title: "iToim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: "/Images/Small-icon.png",
  },
];

export const Work = () => {
  return (
    <div className={styles.container}>
      <Titles
        titlename="Work"
        subtitlename="Some of the noteworthy projects I have built:"
      />
      <div className={styles.box}>
        {arr.map((item, index) => {
          return <Workcard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
