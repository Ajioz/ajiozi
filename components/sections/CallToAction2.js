import Link from "next/link"
const CallToAction2 = () => {
  return (
    <>
      <section className="call-to-action-two">
        <div className="auto-container">
          <div className="outer-box">
            <div className="icon-lines-9"></div>
            <div className="icon-shape-11"></div>
            <div className="sec-title">
              <h3 className="title">Let’s work together just drop us a line</h3>
            </div>
            <Link href="page-contact" className="theme-btn btn-style-one dark-bg hover-light"><span className="btn-title">Contact Us</span></Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default CallToAction2
