import styles from "../styles/Introduction.module.css";
import { ActiveIcon } from "./assets/Active-icon";
import { LocationIcon } from "./assets/Location-icon";

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.first}>
        <div className={styles.title}>Hi, I’m Tom 👋</div>
        <div className={styles.text}>
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </div>
        <div>
          <div>
            <LocationIcon />
          </div>
          <div>Ulaanbaatar, Mongolia</div>
        </div>
        <div>
          <div>
            <ActiveIcon />
          </div>
          <div>Available for new projects</div>
        </div>
        <div>
          <img src="Images/Cat.png"></img>
          <img src="Images/Twitter.png"></img>
          <img src="Images/Figma.png"></img>
        </div>
      </div>
      <div className={styles.second}>
        <img src="Images/Pic.png"></img>
        <img src="Images/Background.png"></img>
      </div>
    </div>
  );
};
