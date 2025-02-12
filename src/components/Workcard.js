import styles from "../styles/Workcard.module.css";

export const Workcard = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.picture}>
        <img src={props.img}></img>
      </div>
      <div className={styles.box}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div>
          {props.skills.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <img src={props.icon}></img>
      </div>
    </div>
  );
};
