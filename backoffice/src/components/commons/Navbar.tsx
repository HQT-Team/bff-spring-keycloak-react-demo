import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getInfo } from "@/apis/authApis";
import AppRoutes from "@/routes/AppRoutes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nearTop, setNearTop] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getInfo()
      .then((res) => {
        setUsername(res.username);
      })
      .catch((err) => {
        setUsername("");
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;

      if (lastScrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (lastScrollY > 150) {
        setNearTop(false);
      } else {
        setNearTop(true);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolled, nearTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
        isScrolled ? "scrolled" : ""
      } ${nearTop ? "sleep" : "awake"}`}
      id="ftco-navbar"
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to={AppRoutes.home}
        >
          Vegefoods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div
          className="collapse navbar-collapse"
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                to={AppRoutes.home}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={AppRoutes.shop}
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.about}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.contact}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
            {username === "" ? (
              <li className="nav-item">
                <a
                  href="/oauth2/authorization/api-client"
                  className="nav-link"
                >
                  Sign in
                </a>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome, {username}
                </a>
                <div className="dropdown-menu">
                  <Link
                    to={AppRoutes.profile}
                    className="dropdown-item"
                  >
                    Profile
                  </Link>
                  <a
                    style={{ cursor: "pointer" }}
                    className="dropdown-item"
                  >
                    Sign out
                  </a>
                </div>
              </li>
            )}

            <li className="nav-item cta cta-colored">
              <Link
                to={AppRoutes.cart}
                className="nav-link"
              >
                <span className="bi bi-cart4"></span>[0]
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
