import styles from "../styles/Experience.module.css";
import { Titles } from "@/components/Titles";
import { Experiencecard } from "@/components/ExperienceCard";

const arr = [
  {
    img: "Images/Column.png",
    texttitle: "Sr. Frontend Developer",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  },
  {
    img: "Images/Column.png",
    texttitle: "Team Lead",
    text: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Jul 2017 - Oct 2021",
  },
  {
    img: "Images/Column.png",
    texttitle: "Team Lead",
    text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    date: "Dec 2015 - May 2017",
  },
];
export const Experience = () => {
  return (
    <div className={styles.container}>
      <Titles
        titlename="Experience"
        subtitlename="Here is a quick summary of my most recent experiences:"
      />
      <div className={styles.box}>
        {arr.map((item, index) => {
          return <Experiencecard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
