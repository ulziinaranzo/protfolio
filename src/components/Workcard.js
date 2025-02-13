import styles from "../styles/Workcard.module.css";

export const Workcard = ({ img, title, text, skills, icon, reverse}) => {
  console.log("Reverse prop:", reverse);
  
  return (
    <div className={`${styles.cardcontainer} ${reverse? styles.reverse : ""}`}>
      <div className={styles.picture}>
        <img src={img}></img>
      </div>
      <div className={styles.box}>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className={styles.skillsContainer}>
        {skills.map((item, index) => (
    <div key={index} className={styles.skillItem}>{item}</div>
  ))}
        </div>
        <img src={icon}></img>
      </div>
    </div>
  );
};
