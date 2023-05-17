import { Link } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";

export default function Footer() {
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-6">
              <h2
                style={{ fontSize: "22px" }}
                className="mb-0"
              >
                Subcribe to our Newsletter
              </h2>
              <span>Get e-mail updates about our latest shops and special offers</span>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <form
                action="#"
                className="subscribe-form"
              >
                <div className="form-group d-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="submit px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a
                href="#"
                className="mouse-icon"
              >
                <div className="mouse-wheel">
                  <span className="bi bi-chevron-double-up"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vegefoods</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li>
                    <a
                      href="https://github.com/khoahd7621"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bi bi-github"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/khoahd7621"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bi bi-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/khoahd7621"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bi bi-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to={AppRoutes.shop}
                      className="py-2 d-block"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={AppRoutes.about}
                      className="py-2 d-block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={AppRoutes.blog}
                      className="py-2 d-block"
                    >
                      Journal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={AppRoutes.contact}
                      className="py-2 d-block"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li>
                      <a
                        href="#"
                        className="py-2 d-block"
                      >
                        Shipping Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="py-2 d-block"
                      >
                        Returns &amp; Exchange
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="py-2 d-block"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="py-2 d-block"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        className="py-2 d-block"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="py-2 d-block"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon bi bi-geo-alt-fill"></span>
                      <span className="text">364 Cong Hoa Street, Tan Binh District, Ho Chi Minh City, Vietnam</span>
                    </li>
                    <li>
                      <a href="tel:+842838106200">
                        <span className="icon bi bi-telephone-fill"></span>
                        <span className="text">+84 28 3810 6200</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hoangdangkhoa7621 @gmail.com">
                        <span className="icon bi bi-envelope-fill"></span>
                        <span className="text">hoangdangkhoa7621 @gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
                <i
                  className="icon-heart color-danger"
                  aria-hidden="true"
                ></i>{" "}
                by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
