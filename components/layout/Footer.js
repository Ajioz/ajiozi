import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllEvents } from "@/dummy";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import LoginModal from "./login";
import { countProps } from "../lib/helpers";
import { fetchMessages } from "@/utils/util-fetch";

const style = {
  position: "relative",
  display: "inline-block",
};

const badgeStyle = {
  position: "absolute",
  top: "-5px",
  right: "-9px",
  backgroundColor: "red",
  width: "20px", // Increased width
  height: "20px", // Increased height
  color: "white",
  borderRadius: "50%",
  display: "flex", // Added flex display
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  fontSize: "12px",
};

export default function Footer({ session }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    const getAllMessages = async () => {
      setAllItems(await fetchMessages());
    };
    getAllMessages();
  }, []);

  useEffect(() => {
    if (isOpen) return setShowModal(true);
    return setShowModal(false);
  }, [isOpen]);

  const closeModal = () => {
    setShowModal(false);
    setIsOpen(false);
  };

  const handleUser = async (state) => {
    if (!state) {
      await signOut({ redirect: false });
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  };

  const messages = () => {
    router.push("/message");
  };

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
                      <Link href="/">
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
                        <Link
                          href="https://www.linkedin.com/company/ajiozi-limited"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="whatsapp://send?text=Hello, I am interested in learning more about your services. Could you please provide more details?&phone=+2348151654368"
                          target="_blank"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://web.facebook.com/Ajiozinitiative"
                          target="_blank"
                        >
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>

                      <li>
                        <Link href="https://x.com/ajiozi_ltd">
                          <i className="fab fa-twitter"></i>
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
                        <Link href="contact">Contact</Link> &nbsp; &#9758;
                        &nbsp;
                        <Link href="faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Control of admin action */}
              <div className="footer-column col-xl-3 col-sm-6">
                <div className="footer-widget contact-widget">
                  <h5 className="widget-title">Contact</h5>
                  <div className="widget-content">
                    <div className="text" style={{ marginBottom: 0 }}>
                      Suite 205, The Biscuit Factory 39-43 Tanner Street London
                      SE1 3BT United Kingdom
                    </div>
                    <ul className="contact-list">
                      <li className="contact-info">
                        <i className="icon fa fa-envelope"></i>
                        <Link href="#" className="mailto:needhelp@ajiozi.com">
                          help@ajiozi.com
                        </Link>
                      </li>
                      <li className="contact-info">
                        <i className="icon fa fa-phone"></i>
                        <Link href="#" className="tel:+2348064107055">
                          +234 8064 1070 55
                        </Link>
                      </li>
                      <li className="contact-info">
                        <i className="icon fa fa-phone"></i>
                        <Link href="#" className="tel:+2348064107055">
                          +234 8151 6543 68
                        </Link>
                      </li>
                      {isUser ? (
                        <>
                          <li className="contact-info">
                            <i className="icon fa fa-message"></i>{" "}
                            <span
                              className="login"
                              onClick={messages}
                              style={style}
                            >
                              Messages
                              {countProps(allItems, false) ? (
                                <span style={badgeStyle}>
                                  {countProps(allItems, false)}
                                </span>
                              ) : (
                                ""
                              )}
                            </span>
                            &nbsp; | &#9758; | &nbsp;
                            <span
                              className="login"
                              onClick={() => handleUser(false)}
                            >
                              Logout
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
      <LoginModal
        showModal={showModal}
        closeModal={closeModal}
        handleUser={handleUser}
        session={session}
      />
    </>
  );
}
