import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg ${styles.nav}`}>
      <div className={styles.containerFluid}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={`navbar-nav ${styles.navbarNav}`}>
            <Link
              to="/"
              className={`nav-link ${styles.navLink} ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${styles.navLink} ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              PROJECTS
            </Link>
            <Link
              to="/skills"
              className={`nav-link ${styles.navLink} ${
                location.pathname === "/skills" ? "active" : ""
              }`}
            >
              SKILLS
            </Link>
            <Link
              to="/personal"
              className={`nav-link ${styles.navLink} ${
                location.pathname === "/personal" ? "active" : ""
              }`}
            >
              PERSONAL
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
