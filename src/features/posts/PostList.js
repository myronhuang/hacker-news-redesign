import { useGetNewPostIdsQuery } from "../../services/hackerNewsApi";
import { Post } from "./Post";
import styles from "../../styles/PostList.module.css";
import { Link, useLocation, useParams } from "react-router-dom";

export const PostList = () => {
  //RTK Query fetch new post list
  const { data, isSuccess, isError, error } = useGetNewPostIdsQuery();

  const loc = useLocation();
  let { page } = useParams();

  if (!page) {
    page = 1;
  }

  //Determine posts to display on current page
  const startIndex = (page - 1) * 12;
  const endIndex = startIndex + 12;

  let output;

  if (isSuccess) {
    output = data
      .slice(startIndex, endIndex)
      .map((id) => <Post key={id} itemId={id} />);
  } else if (isError) {
    output = <div>{error.toString()}</div>;
  }

  return (
    <div className={styles.listWrapper}>
      <ol start={(page - 1) * 12 + 1} className={styles.postList}>
        {output}
      </ol>
      <Link to={`${loc.pathname === "/" ? "latest/" : ""}${Number(page) + 1}`}>
        <button className={styles.moreButton}>show more</button>
      </Link>
    </div>
  );
};
