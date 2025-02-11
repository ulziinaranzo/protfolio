import styles from "../styles/Skillsbox.module.css";

export const Skillsbox = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} />
      <div>{props.title}</div>
    </div>
  );
};
