import Link from "next/link"
const CallToAction1 = () => {
  return (
    <>
      <section className="call-to-action">
        <div className="icon-lines-5"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="image">
              <img src="images/resource/cta-1.jpg" alt="" />
            </div>
            <div className="sec-title">
              {" "}
              <i className="icon flaticon-laptop"></i>
              <h3 className="title">
                Let Us Help You Bring Your App Vision to Life...
              </h3>
            </div>
            <Link href="page-about" className="theme-btn btn-style-one dark-bg">
              <span className="btn-title">Discover More</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default CallToAction1
