import styles from "../styles/Workcard.module.css";

export const Workcard = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.picture}>
        <img src={props.img} alt="Card visual" />
      </div>
      <div className={styles.box}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className={styles.skillsContainer}>
          {props.skills.map((item, index) => (
            <div key={index} className={styles.skillItem}>{item}</div>
          ))}
        </div>
        <img src={props.icon} alt="Icon" />
      </div>
    </div>
  );
};