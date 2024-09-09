const style = {
  color: "#f1a82a"
}

const Features2T3 = () => {
  return (
    <>
      <section className="features-section-five pt-0 pb-0">
        <div className="row g-0">
          <div className="image-column col-xl-4">
            <figure className="image">
              <img src="images/resource/feature4-1.jpg" alt="Image" />
            </figure>
          </div>
          <div className="content-column col-xl-4 col-lg-6">
            <div className="inner-column">
              <div className="icon-arrow3 bounce-x"></div>
              <div className="sec-title dark">
                {" "}
                <span className="sub-title">Our Industrial Landscape</span>
                <h2>
                  Leading Solutions for <br />
                  Industries
                </h2>
              </div>
            </div>
          </div>
          <div className="icons-column col-xl-4 col-lg-6">
            <div className="inner-column">
              <div className="row g-0">
                <div className="feature-block-five col-md-4 col-sm-6">
                  <div className="inner">
                    {" "}
                    <i className="icon fa fa-city" style={style}></i>
                    <h5 className="title">Automation</h5>
                  </div>
                </div>
                <div className="feature-block-five col-md-4 col-sm-6">
                  <div className="inner">
                    {" "}
                    <i className="icon fa fa-robot" style={style}></i>
                    <h5 className="title">Smart Engines</h5>
                  </div>
                </div>
                <div className="feature-block-five col-md-4 col-sm-6">
                  <div className="inner">
                    {" "}
                    <i className="icon fa fa-atom" style={style}></i>
                    <h5 className="title">Smart Energy</h5>
                  </div>
                </div>
                <div className="feature-block-five col-md-4 col-sm-6">
                  <div className="inner">
                    {" "}
                    <i
                      className="icon flaticon-graphic-design"
                      style={style}
                    ></i>
                    <h5 className="title">Industrial Iot</h5>
                  </div>
                </div>
                <div className="feature-block-five col-md-4 col-sm-6">
                  <div className="inner">
                    {" "}
                    <i className="icon fas fa-watch" style={style}></i>
                    <h5 className="title">Smart View</h5>
                  </div>
                </div>
                <div className="feature-block-five col-md-4 col-sm-6">
                  <div className="inner">
                    {" "}
                    <i className="icon fa fa-tools" style={style}></i>
                    <h5 className="title">Maintenance</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features2T3
