import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { selectIsLight } from "../features/theme/themeSlice";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const loc = useLocation();
  const isLight = useSelector(selectIsLight);
  return (
    <div className={styles.footer}>
      <div className={styles.line}> </div>
      <div className={styles.footerBody}>
        <p className={styles.title}>Hacker News</p>
        <ul className={styles.footerLinks}>
          <li className={styles.latest}>
            <NavLink
              to="/latest"
              className={({ isActive }) =>
                isActive || loc.pathname === "/"
                  ? styles.active
                  : isLight
                  ? `${styles.navLink} ${styles.lightFont}`
                  : `${styles.navLink} ${styles.darkFont}`
              }
            >
              latest
            </NavLink>
          </li>
          <li className={styles.separator}>|</li>
          <li className={styles.starred}>
            {" "}
            <NavLink
              to="/starred"
              className={({ isActive }) =>
                isActive
                  ? styles.active
                  : isLight
                  ? `${styles.navLink} ${styles.lightFont}`
                  : `${styles.navLink} ${styles.darkFont}`
              }
            >
              starred
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
