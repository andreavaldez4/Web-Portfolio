import { useEffect, useRef } from "react";
import styles from "./Nav.module.css";

function Nav() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const toggler = navbar.querySelector(".navbar-toggler");
    const navbarCollapse = navbar.querySelector(".navbar-collapse");
    const navLinks = navbar.querySelectorAll(".nav-link");

    const closeMenu = () => {
      if (navbarCollapse.classList.contains("show")) {
        toggler.click();
      }
    };

    const handleOutsideClick = (event) => {
      if (
        navbarCollapse.classList.contains("show") &&
        !navbar.contains(event.target)
      ) {
        closeMenu();
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.nav}`} ref={navbarRef}>
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
            <a
              className={`nav-link active ${styles.navLink}`}
              aria-current="page"
              href="#"
            >
              HOME
            </a>
            <a className={`nav-link ${styles.navLink}`} href="#">
              PROJECTS
            </a>
            <a className={`nav-link ${styles.navLink}`} href="#">
              SKILLS
            </a>
            <a className={`nav-link ${styles.navLink}`} href="#">
              PERSONAL
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
