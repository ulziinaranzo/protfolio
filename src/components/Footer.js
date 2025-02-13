import styles from "../styles/Footer.module.css";
import { Titles } from "./Titles";


export const Footer = () => {
  return (
    <div className={styles.container}>
      <Titles
        titlename="Get in touch"
        subtitlename="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />
    </div>
  );
};
