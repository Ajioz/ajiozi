import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "./login";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (isOpen) return setShowModal(true);
    return setShowModal(false);
  }, [isOpen]);

  const closeModal = () => {
    setShowModal(false);
    setIsOpen(false);
  };

  const logOut = () => {};

  const messages = () => {};

  return (
    <>
      <footer className="main-footer footer-style-one">
        <div className="icon-dots-2"></div>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-4 col-sm-6">
                <div className="footer-widget about-widget">
                  <div className="widget-content">
                    <div className="logo">
                      <Link href="#">
                        {" "}
                        <img src="images/logo.png" alt="" />
                      </Link>
                    </div>
                    <div className="text">
                      Desires to obtain pain of itself, because it is pain, but{" "}
                      <br />
                      occasionally circumstances.
                    </div>
                    <ul className="social-icon-two">
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-2 col-sm-6">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Explore</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <Link href="#">About Company</Link>
                      </li>
                      <li>
                        <Link href="#">Meet the Team</Link>
                      </li>
                      <li>
                        <Link href="#">News & Media</Link>
                      </li>
                      <li>
                        <Link href="#">Our Projects</Link>
                      </li>
                      <li>
                        <Link href="page-contact">Contact</Link> &nbsp; &#9758;
                        &nbsp;
                        <Link href="page-faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-sm-6">
                <div className="footer-widget contact-widget">
                  <h5 className="widget-title">Contact</h5>
                  <div className="widget-content">
                    <div className="text">
                      66 Road Broklyn Street, 600 <br />
                      New York, USA
                    </div>
                    <ul className="contact-list">
                      <li className="contact-info">
                        {" "}
                        <i className="icon fa fa-envelope"></i>{" "}
                        <Link href="#" className="mailto:needhelp@company.com">
                          needhelp@company.com
                        </Link>{" "}
                      </li>
                      <li className="contact-info">
                        {" "}
                        <i className="icon fa fa-phone"></i>{" "}
                        <Link href="#" className="tel:+1-666-888-0000">
                          +92 666 888 0000
                        </Link>{" "}
                      </li>
                      {isUser ? (
                        <>
                          <li className="contact-info">
                            <i className="icon fa fa-message"></i>{" "}
                            <span className="login" onClick={messages}>
                              Messages
                            </span>{" "}
                            &nbsp; | &#9758; | &nbsp;
                            <span className="login" onClick={logOut}>
                              LogOut
                            </span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="contact-info">
                            <i className="icon fa fa-sign"></i>{" "}
                            <span
                              className="login"
                              onClick={() => setIsOpen(!isOpen)}
                            >
                              Login
                            </span>{" "}
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-sm-6">
                <div className="footer-widget gallery-widget">
                  <h4 className="widget-title">Projects</h4>
                  <div className="widget-content">
                    <div className="insta-gallery">
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="images/resource/gallery-thumb-1.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="images/resource/gallery-thumb-2.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="images/resource/gallery-thumb-3.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="images/resource/gallery-thumb-4.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="images/resource/gallery-thumb-5.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="images/resource/gallery-thumb-6.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright-text">
              © 2017 -{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
              })}{" "}
              | Ajiozi Limited. All rights reserved.{" "}
            </div>
          </div>
        </div>
      </footer>
      <LoginModal showModal={showModal} closeModal={closeModal} />
    </>
  );
}
