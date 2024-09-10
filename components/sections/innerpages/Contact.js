import { useEffect, useState } from "react";
import { notify } from "@/components/lib/helpers";
import Notification from "@/components/ui/notification";

export default function Contactpage() {
  const [requestStatus, setRequestStatus] = useState(null); //pending, success, error||none
  const [requestError, setRequestError] = useState(null);
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
      {/* Contact Details Start */}
      <section className="contact-details">
        <div className="container pb-80">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Contact Us</span>
                <h2>We'd Love to Hear From You</h2>
                <p>
                  Feel free to reach out to us with any questions or comments
                  you may have. We're here to help!
                </p>
              </div>
              {/*  Contact Form  */}
              <form id="contact_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_name">Name</label>
                      <input
                        id="form_name"
                        name="form_name"
                        className="form-control"
                        type="text"
                        value={data.name}
                        onChange={handleChange("name")}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_email">Email</label>
                      <input
                        id="form_email"
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        value={data.email}
                        onChange={handleChange("email")}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_subject">Subject</label>
                      <input
                        id="form_subject"
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        value={data.subject}
                        onChange={handleChange("subject")}
                        placeholder="Enter the subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_phone">Phone</label>
                      <input
                        id="form_phone"
                        name="form_phone"
                        className="form-control"
                        type="number"
                        value={data.phone}
                        onChange={handleChange("phone")}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="form_message">Message</label>
                  <textarea
                    id="form_message"
                    name="form_message"
                    className="form-control required"
                    rows="7"
                    value={data.message}
                    onChange={handleChange("message")}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="mb-5">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one me-2"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Send Message</span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one bg-theme-color5"
                  >
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
              {/*  Contact Form Validation */}
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need Assistance?</span>
                  <h2>Contact Information</h2>
                  <p>
                    We're here to help you with any questions or concerns you
                    may have. Reach out to us through any of the following
                    methods:
                  </p>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Call Us</h6>
                      <a href="tel:980089850">
                        <span>Free</span> +92 (020)-9850
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Email Us</h6>
                      <a href="mailto:needhelp@ajiozi.com">
                        needhelp@ajiozi.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>Visit Us</h6>
                      <span>66 Brooklyn Golden Street, New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Details End */}

      {/*  Map Section */}
      <section className="map-section">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1572247592753!2d5.766990774075362!3d5.543691533775216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad867f385ec3%3A0xa23612766ebeb996!2sAjiozi%20Limited!5e0!3m2!1sen!2sng!4v1725893611743!5m2!1sen!2sng"
          style={{ width: "100%", height: "600px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* End Map Section */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
}
