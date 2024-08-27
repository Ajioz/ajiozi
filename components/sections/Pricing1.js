import Link from "next/link"
const Pricing1 = () => {
  return (
    <>
      <section className="pricing-section">
        <div className="icon-lines-2"></div>
        <div className="auto-container">
          <div className="sec-title text-center"> <span className="sub-title">Our Pricing Plan</span>
            <h2>Best pricing plans that <br/>fits for you</h2>
          </div>
          <div className="row"> 
            
            <div className="pricing-block col-lg-4 col-sm-6 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="title-box">
                  <h3 className="title">Basic Plan</h3>
                  <div className="text">Designed for businesses with basic IT requirements</div>
                </div>
                <h2 className="price"> <span>$</span>59<sub>/Month</sub></h2>
                <div className="text">All Basic services include:</div>
                <ul className="features-list">
                  <li><i className="fa fa-angle-double-right"></i>24/7 system monitoring</li>
                  <li><i className="fa fa-angle-double-right"></i>Security management</li>
                  <li className="false"><i className="fa fa-angle-double-right"></i>Patch management</li>
                  <li className="false"><i className="fa fa-angle-double-right"></i>Remote support</li>
                </ul>
                <div className="btn-box"> <Link href="page-pricing" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
              </div>
            </div>
            
            <div className="pricing-block col-lg-4 col-sm-6 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="title-box">
                  <h3 className="title">Business Plan</h3>
                  <div className="text">Designed for businesses with basic IT requirements</div>
                </div>
                <h2 className="price"> <span>$</span>99<sub>/Month</sub></h2>
                <div className="text">All Basic services include:</div>
                <ul className="features-list">
                  <li><i className="fa fa-angle-double-right"></i>24/7 system monitoring</li>
                  <li><i className="fa fa-angle-double-right"></i>Security management</li>
                  <li><i className="fa fa-angle-double-right"></i>Patch management</li>
                  <li className="false"><i className="fa fa-angle-double-right"></i>Remote support</li>
                </ul>
                <div className="btn-box"> <Link href="page-pricing" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
              </div>
            </div>
            
            <div className="pricing-block col-lg-4 col-sm-6 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="title-box">
                  <h3 className="title">Basic Plan</h3>
                  <div className="text">Designed for businesses with basic IT requirements</div>
                </div>
                <h2 className="price"> <span>$</span>59<sub>/Month</sub></h2>
                <div className="text">All Basic services include:</div>
                <ul className="features-list">
                  <li><i className="fa fa-angle-double-right"></i>24/7 system monitoring</li>
                  <li><i className="fa fa-angle-double-right"></i>Security management</li>
                  <li className="false"><i className="fa fa-angle-double-right"></i>Patch management</li>
                  <li className="false"><i className="fa fa-angle-double-right"></i>Remote support</li>
                </ul>
                <div className="btn-box"> <Link href="page-pricing" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Pricing1
