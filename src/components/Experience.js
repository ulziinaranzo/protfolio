import styles from "../styles/Experience.module.css";
import { Titles } from "@/components/Titles";

const titles = [
    "Experience",
    "Here is a quick summary of my most recent experiences:",
  ];
export const Experience = () => {
    return (
        <div className={styles.container}>
            {titles.map((title, index) => (
        <Titles key={index} text={title} />
      ))}
        </div>

    )
}