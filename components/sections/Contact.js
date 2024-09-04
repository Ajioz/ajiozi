import { useState, useEffect } from "react";
import Notification from "../ui/notification";
import { notify } from "../lib/helpers";

const Contact2 = () => {
  const [requestStatus, setRequestStatus] = useState(); //pending, success, error||none
  const [requestError, setRequestError] = useState();
  const [data, setData] = useState({
    email: "",
    name: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (props) => (e) => {
    setData((prev) => ({ ...prev, [props]: e.target.value }));
  };

  useEffect(() => {
    let timer;
    if (requestStatus === "success" || requestStatus === "error") {
      timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [requestStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(data), // Convert msgDetail to JSON string
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || "Something went wrong");
      }

      setRequestStatus("success");
      setData({
        email: "",
        name: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  const notification = notify(requestStatus, requestError);

  return (
    <>
      <section className="contact-section-two">
        <div className="bg bg-pattern-11"></div>
        <div className="icon-shape4"></div>
        <div className="icon-shape5"></div>
        <div className="auto-container">
          <div className="row">
            <div className="form-column col-lg-7 col-md-12">
              <div className="inner-column">
                <div className="sec-title light">
                  {" "}
                  <span className="sub-title">Contact Us</span>
                  <h2>Let’s work together</h2>
                </div>
                <div className="contact-form style-two wow fadeInLeft">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="text"
                          name="full_name"
                          value={data.name}
                          onChange={handleChange("name")}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="email"
                          name="Email"
                          value={data.email}
                          onChange={handleChange("email")}
                          placeholder="Email address"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="text"
                          name="phone"
                          value={data.phone}
                          onChange={handleChange("phone")}
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="text"
                          name="subject"
                          value={data.subject}
                          onChange={handleChange("subject")}
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Write message"
                          value={data.message}
                          onChange={handleChange("message")}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title">Send a message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="image-column col-lg-5 col-md-12 col-sm-12 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/contact2-1.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </section>
    </>
  );
};
export default Contact2;
