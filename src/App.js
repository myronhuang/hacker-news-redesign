import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { selectIsLight } from "./features/theme/themeSlice";
import styles from "./styles/App.module.css";

function App() {
  const isLight = useSelector(selectIsLight);

  return (
    <div className={`${isLight ? "" : styles.dark} ${styles.app}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
