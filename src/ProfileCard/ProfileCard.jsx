import styles from "./ProfileCard.module.css";
const user = {
  username: "Jacques Gluke",
  title: "programmer",
  hobbys: ["rock-music", "travel", "boxing", "books"],
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
};
export default function ProfileCard() {
  const { avatar, username, hobbys, title } = user;
  return (
    <div className={styles.profile}>
      <div className={styles.descriptions}>
        <img className={styles.avatar} src={avatar} alt={username} />
        <p className={styles.username}>{username}</p>
        <p className={styles.hobbys}>{hobbys.map((el) => `${el}, `)}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
