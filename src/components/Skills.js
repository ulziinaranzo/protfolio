import styles from "../styles/Introduction.module.css";
const Imgs = [
  <img src="Images/icon-javscript.png"></img>,
  <img src="Images/icon-typescript.png"></img>,
  <img src="Images/icon-react.png"></img>,
  <img src="Images/icon-nextjs.png"></img>,
  <img src="Images/icon-nodejs.png"></img>,
  <img src="Images/icon-express.png"></img>,
  <img src="Images/icon-nest.png"></img>,
  <img src="Images/icon-socket.png"></img>,
  <img src="Images/icon-postgresql.png"></img>,
  <img src="Images/icon-mongodb.png"></img>,
  <img src="Images/icon-sass.png"></img>,
  <img src="Images/Clip path group.png"></img>,
  <img src="Images/icon-figma.png"></img>,
  <img src="Images/icon-cypress.png"></img>,
  <img src="Images/icon-storybook.png"></img>,
  <img src="Images/icon-git.png"></img>,
];
export const skill = () => {
  <div className="container">Imgs.map</div>;
};
export const Skills = () => {
  return (
    <div className={styles.skills}>
      <div>Skills</div>
      <div>The skills, tools and technologies I am really good at:</div>

      <div className={styles.skillscontainer}>
        <div>
          <img src="Images/icon-javscript.png"></img>
          <div>Javascript</div>
        </div>
      </div>
      <div className={styles.skillscontainer1}></div>
    </div>
  );
};
