import styles from "../styles/Navbar.module.css";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLight, toggleLight } from "../features/theme/themeSlice";

export const Navbar = () => {
  const loc = useLocation();
  const isLight = useSelector(selectIsLight);

  const dispatch = useDispatch();

  return (
    <nav className={styles.nav}>
      <div className={styles.leftNavWrapper}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>Y</div>
          <h2 className={styles.title}>Hacker News</h2>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.latest}>
            <NavLink
              to="/latest"
              className={({ isActive }) =>
                isActive || loc.pathname === "/"
                  ? styles.active
                  : isLight
                  ? styles.navLink
                  : `${styles.navLink} ${styles.darkFont}`
              }
            >
              latest
            </NavLink>
          </li>
          <li className={styles.separator}>|</li>
          <li className={styles.starred}>
            <NavLink
              to="/starred"
              className={({ isActive }) =>
                isActive
                  ? styles.active
                  : isLight
                  ? styles.navLink
                  : `${styles.navLink} ${styles.darkFont}`
              }
            >
              starred
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        onClick={() => dispatch(toggleLight())}
        className={`${styles.icon} ${
          isLight ? styles.lightFont : styles.darkFont
        }`}
      >
        {isLight ? <MoonIcon /> : <SunIcon />}
      </button>
    </nav>
  );
};
