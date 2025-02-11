import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.TOM}>TOM</div>
      <div className={styles.content}>
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <div>
          <img src="Images/vercel.svg"></img>
        </div>
        <div>
          <img src="Images/Sun.png"></img>
        </div>
        <div className={styles.download}>Download CV</div>
      </div>
    </div>
  );
};
