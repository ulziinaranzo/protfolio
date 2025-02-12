import styles from "../styles/ExperienceCard.module.css";

export const Experiencecard = (props) => {
  return (
    <div className={styles.smallcontainer}>
      <img src={props.img} />
      <div className={styles.textBox}>
        <h1>{props.texttitle}</h1>
        <ul>
          {props.text.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div>{props.date}</div>
    </div>
  );
};
