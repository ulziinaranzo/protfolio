import styles from "../styles/Workcard.module.css";

export const Workcard = ({ img, title, text, skills, icon, position }) => {
  return (
    <div className={styles.cardcontainer}>
      <div
        className={`${styles.picture} ${
          position === "second" ? styles.right : ""
        }`}
      >
        <img src={img} alt="Card visual" />
      </div>
      <div
        className={`${styles.box} ${
          position === "second" ? styles.left : ""
        }`}
      >
        <h1>{title}</h1>
        <p>{text}</p>
        <div className={styles.skillsContainer}>
          {skills.map((item, index) => (
            <div key={index} className={styles.skillItem}>{item}</div>
          ))}
        </div>
        <img src={icon} alt="Icon" />
      </div>
    </div>
  );
};