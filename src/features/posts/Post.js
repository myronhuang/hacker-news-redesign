import { useGetItemByIdQuery } from "../../services/hackerNewsApi";
import { calcElapsedTime, extractHostname } from "../../utilities/helper";
import styles from "../../styles/Post.module.css";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as StarFill } from "../../icons/starFill.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectStarredPosts, starPost, unstarPost } from "./postsSlice";
import { selectIsLight } from "../theme/themeSlice";

export const Post = ({ itemId }) => {
  //RTK Query fetch post data
  const { data, isSuccess, isError, error } = useGetItemByIdQuery(itemId);

  const isLight = useSelector(selectIsLight);

  const selectStarred = useSelector(selectStarredPosts);

  const dispatch = useDispatch();

  let item;

  if (isSuccess) {
    if (data !== null) {
      let url;
      let hostname;

      let time = calcElapsedTime(data.time);

      let score =
        data.score > 1 ? `${data.score} points` : `${data.score} point`;

      if (data.url) {
        // External url
        url = data.url;
        hostname = extractHostname(data.url);
      } else {
        // Ask HN posts don't have an external URL
        url = `https://news.ycombinator.com/item?id=${data.id}`;
      }

      item = (
        <li className={styles.item} key={data.id}>
          <p className={styles.itemWrapper}>
            <a
              className={`${styles.itemURL} ${
                isLight ? styles.lightFont : styles.darkURL
              }`}
              href={url}
            >
              {data.title}
            </a>
            <span
              className={`${styles.hostname} ${isLight ? "" : styles.darkFont}`}
            >
              {hostname}
            </span>
          </p>
          <p className={`${styles.caption} ${!isLight && styles.darkFont}`}>
            <span className={styles.score}>
              {score} by {data.by} {time} ago
            </span>
            |
            <span className={styles.comments}>{data.descendants} comments</span>
            |
            {selectStarred.find((id) => id === data.id) ? (
              <span
                onClick={() => dispatch(unstarPost(data))}
                className={styles.star}
              >
                <StarFill /> saved
              </span>
            ) : (
              <span
                onClick={() => dispatch(starPost(data))}
                className={styles.star}
              >
                <Star /> save
              </span>
            )}
          </p>
        </li>
      );
    } else {
      item = <></>;
    }
  } else if (isError) {
    item = <div>{error.toString()}</div>;
  }

  return <>{item}</>;
};
