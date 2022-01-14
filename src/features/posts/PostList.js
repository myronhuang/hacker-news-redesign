import { useGetNewPostIdsQuery } from "../../services/hackerNewsApi";
import { Post } from "./Post";
import styles from "../../styles/PostList.module.css";
import { Link, useLocation, useParams } from "react-router-dom";

export const PostList = () => {
  const { data, isSuccess, isError, error } = useGetNewPostIdsQuery();

  const loc = useLocation();
  let { page } = useParams();

  if (!page) {
    page = 1;
  }

  const startIndex = (page - 1) * 12;
  const endIndex = startIndex + 12;

  let output;

  if (isSuccess) {
    //For Testing
    // let data = [
    //   29903557, 29903517, 29903482, 29903473, 29903470, 29903457, 29903449,
    //   29903443, 29903430, 29903414, 29903409, 29903377, 29903374,
    // ];

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
