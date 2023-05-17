import { Link } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";

import bg1 from "@/assets/images/bg_1.jpg";
import bg2 from "@/assets/images/bg_2.jpg";
import bg3 from "@/assets/images/bg_3.jpg";

export default function Hero() {
  return (
    <div
      id="shop-carousel"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner home-slider">
        <div
          className="carousel-item slider-item active"
          style={{ backgroundImage: `url("${bg1}")` }}
        >
          <div className="overlay"></div>
          <div className="carousel-caption d-flex flex-column justify-content-center slider-text">
            <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
            <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
            <p>
              <Link
                to={AppRoutes.shop}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </p>
          </div>
        </div>
        <div
          className="carousel-item slider-item"
          style={{ backgroundImage: `url("${bg2}")` }}
        >
          <div className="overlay"></div>
          <div className="carousel-caption d-flex flex-column justify-content-center slider-text">
            <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
            <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
            <p>
              <Link
                to={AppRoutes.shop}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </p>
          </div>
        </div>
        <div
          className="carousel-item slider-item"
          style={{ backgroundImage: `url("${bg3}")` }}
        >
          <div className="overlay"></div>
          <div className="carousel-caption d-flex flex-column justify-content-center slider-text">
            <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
            <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
            <p>
              <Link
                to={AppRoutes.shop}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#shop-carousel"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#shop-carousel"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
