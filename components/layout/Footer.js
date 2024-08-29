import { useState, useEffect } from "react";
import Link from "next/link";

  // const FormModal = ({ showModal, closeModal }) => {
  //   return (
  //     <div
  //       className={`modal ${showModal ? "show" : ""}`}
  //       style={{
  //         display: showModal ? "block" : "none",
  //         position: "fixed",
  //         zIndex: 1000,
  //         left: 0,
  //         top: 0,
  //         width: "100%",
  //         height: "100%",
  //         overflow: "auto",
  //         backgroundColor: "rgba(0,0,0,0.4)",
  //       }}
  //     >
  //       <div
  //         className="modal-content"
  //         style={{
  //           backgroundColor: "#fefefe",
  //           margin: "15% auto",
  //           padding: "20px",
  //           border: "1px solid #888",
  //           width: "80%",
  //           maxWidth: "500px",
  //         }}
  //       >
  //         <span
  //           className="close"
  //           onClick={closeModal}
  //           style={{
  //             color: "#aaa",
  //             float: "right",
  //             fontSize: "28px",
  //             fontWeight: "bold",
  //             cursor: "pointer",
  //           }}
  //         >
  //           &times;
  //         </span>
  //         <h2 style={{ marginBottom: "20px" }}>Contact Form</h2>
  //         <form>
  //           <input
  //             type="text"
  //             placeholder="Name"
  //             required
  //             style={{
  //               width: "100%",
  //               padding: "12px 20px",
  //               margin: "8px 0",
  //               display: "inline-block",
  //               border: "1px solid #ccc",
  //               boxSizing: "border-box",
  //             }}
  //           />
  //           <input
  //             type="email"
  //             placeholder="Email"
  //             required
  //             style={{
  //               width: "100%",
  //               padding: "12px 20px",
  //               margin: "8px 0",
  //               display: "inline-block",
  //               border: "1px solid #ccc",
  //               boxSizing: "border-box",
  //             }}
  //           />
  //           <textarea
  //             placeholder="Message"
  //             required
  //             style={{
  //               width: "100%",
  //               padding: "12px 20px",
  //               margin: "8px 0",
  //               display: "inline-block",
  //               border: "1px solid #ccc",
  //               boxSizing: "border-box",
  //               height: "100px",
  //             }}
  //           ></textarea>
  //           <button
  //             type="submit"
  //             style={{
  //               backgroundColor: "#4CAF50",
  //               color: "white",
  //               padding: "14px 20px",
  //               margin: "8px 0",
  //               border: "none",
  //               cursor: "pointer",
  //               width: "100%",
  //             }}
  //           >
  //             Submit
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };
  


  
export default function Footer() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isLoggedIn]);

  const closeModal = () => {
    setShowModal(false);
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
                      <li className="contact-info">
                        <i className="icon fa fa-sign"></i>{" "}
                        <span
                          className="login"
                          onClick={() => setIsLoggedIn(!isLoggedIn)}
                        >
                          Login
                        </span>{" "}
                      </li>
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
      <FormModal showModal={showModal} closeModal={closeModal} />
    </>
  );
}


const FormModal = ({ showModal, closeModal }) => {
  return (
    <div
      className={`modal ${showModal ? "show" : ""}`}
      style={{
        display: showModal ? "block" : "none",
        position: "fixed",
        zIndex: 1000,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        className={`modal-content ${showModal ? "slide-in" : "slide-out"}`}
        style={{
          backgroundColor: "#fefefe",
          margin: "15% auto",
          padding: "20px",
          border: "1px solid #888",
          width: "80%",
          maxWidth: "500px",
          animationDuration: "0.5s",
          animationTimingFunction: "ease-in-out",
        }}
      >
        <span
          className="close"
          onClick={closeModal}
          style={{
            color: "#aaa",
            float: "right",
            fontSize: "28px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          &times;
        </span>
        <h2 style={{ marginBottom: "20px" }}>Contact Form</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <textarea
            placeholder="Message"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              height: "100px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "14px 20px",
              margin: "8px 0",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
