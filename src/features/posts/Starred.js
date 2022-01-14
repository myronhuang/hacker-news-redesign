import { Post } from "./Post";
import { useSelector } from "react-redux";
import { selectStarredPosts } from "./postsSlice";
import styles from "../../styles/Starred.module.css";

export const Starred = () => {
  const starredPosts = useSelector(selectStarredPosts);

  let output = starredPosts.map((id) => <Post key={id} itemId={id} />);

  return (
    <div className={styles.listWrapper}>
      <ol className={styles.postList}>{output}</ol>{" "}
    </div>
  );
};
