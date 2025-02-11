import styles from "../styles/Skillsbox.css";
const arr = [
  {
    img: "Images/icon-javscript.png",
    title: "Javascript",
  },
  {
    img: "Images/icon-typescript.png",
    title: "Typescript",
  },
  {
    img: "Images/icon-react.png",
    title: "React",
  },
  {
    img: "Images/icon-nextjs.png",
    title: "Next.js",
  },
  {
    img: "Images/icon-nodejs.png",
    title: "Node.js",
  },
  {
    img: "Images/icon-express.png",
    title: "Express.js",
  },
  {
    img: "Images/icon-nest.png",
    title: "Nest.js",
  },
  {
    img: "Images/icon-socket.png",
    title: "",
  },
];

export const Skillsbox = (props) => {
  return (
    <div className={styles.container}>
      {arr.map((item) => {
        return (
          <div className={styles.card}>
            <h1>Hello</h1>;
          </div>
        );
      })}
    </div>
  );
};
