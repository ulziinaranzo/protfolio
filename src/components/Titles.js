import styles from "../styles/Titles.module.css";

export const Titles = (props) => {
  return (
    <div className={styles.title}>
      <div className={styles.titleBox}>{props.titlename}</div>
      <div className={styles.subtitle}>{props.subtitlename}</div>
    </div>
  );
};

// export const Titles = ({ title, subtitle }) => {
//   return (
//     <div>
//       <div className={styles.titleBox}>{title}</div>
//       <div className={styles.subtitle}>{subtitle}</div>
//     </div>
//   );
// };
