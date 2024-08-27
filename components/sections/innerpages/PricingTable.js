import Link from "next/link";

const PricingTable = () => {
	return (
	<>


  {/* Pricing Section */}
  <section className="pricing-section2">
    <div className="auto-container">
      <div className="sec-title">
        <span className="sub-title">Pricing</span>
        <h2>The artistry behind <br/>successful brands</h2>
      </div>
      <div className="pricing-tab tabs-box">
        <ul className="tab-btns tab-buttons">
          <li className="tab-btn active-btn" data-tab="#Monthly">Monthly</li>
          <li className="tab-btn" data-tab="#Yearly">Yearly</li>
        </ul>
        <div className="tabs-content">
          {/*Tab*/}
          <div className="tab active-tab" id="Monthly">
            <div className="row">
              {/* Pricing Block */}
              <div className="pricing-block col-xl-4 col-md-6">
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
                  <div className="btn-box"> <Link href="" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
                </div>
              </div>
              {/* Pricing Block */}
              <div className="pricing-block col-xl-4 col-md-6">
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
                  <div className="btn-box"> <Link href="" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
                </div>
              </div>
              {/* Pricing Block */}
              <div className="pricing-block col-xl-4 col-md-6">
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
                  <div className="btn-box"> <Link href="" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
                </div>
              </div>
            </div>
          </div>
          {/*Tab*/}
          <div className="tab" id="Yearly">
            <div className="row">
              {/* Pricing Block */}
              <div className="pricing-block col-xl-4 col-md-6">
                <div className="inner-box">
                  <div className="title-box">
                    <h3 className="title">Basic Plan</h3>
                    <div className="text">Designed for businesses with basic IT requirements</div>
                  </div>
                  <h2 className="price"> <span>$</span>159<sub>/Month</sub></h2>
                  <div className="text">All Basic services include:</div>
                  <ul className="features-list">
                    <li><i className="fa fa-angle-double-right"></i>24/7 system monitoring</li>
                    <li><i className="fa fa-angle-double-right"></i>Security management</li>
                    <li className="false"><i className="fa fa-angle-double-right"></i>Patch management</li>
                    <li className="false"><i className="fa fa-angle-double-right"></i>Remote support</li>
                  </ul>
                  <div className="btn-box"> <Link href="" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
                </div>
              </div>
              {/* Pricing Block */}
              <div className="pricing-block col-xl-4 col-md-6">
                <div className="inner-box">
                  <div className="title-box">
                    <h3 className="title">Business Plan</h3>
                    <div className="text">Designed for businesses with basic IT requirements</div>
                  </div>
                  <h2 className="price"> <span>$</span>199<sub>/Month</sub></h2>
                  <div className="text">All Basic services include:</div>
                  <ul className="features-list">
                    <li><i className="fa fa-angle-double-right"></i>24/7 system monitoring</li>
                    <li><i className="fa fa-angle-double-right"></i>Security management</li>
                    <li><i className="fa fa-angle-double-right"></i>Patch management</li>
                    <li className="false"><i className="fa fa-angle-double-right"></i>Remote support</li>
                  </ul>
                  <div className="btn-box"> <Link href="" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
                </div>
              </div>
              {/* Pricing Block */}
              <div className="pricing-block col-xl-4 col-md-6">
                <div className="inner-box">
                  <div className="title-box">
                    <h3 className="title">Basic Plan</h3>
                    <div className="text">Designed for businesses with basic IT requirements</div>
                  </div>
                  <h2 className="price"> <span>$</span>159<sub>/Month</sub></h2>
                  <div className="text">All Basic services include:</div>
                  <ul className="features-list">
                    <li><i className="fa fa-angle-double-right"></i>24/7 system monitoring</li>
                    <li><i className="fa fa-angle-double-right"></i>Security management</li>
                    <li className="false"><i className="fa fa-angle-double-right"></i>Patch management</li>
                    <li className="false"><i className="fa fa-angle-double-right"></i>Remote support</li>
                  </ul>
                  <div className="btn-box"> <Link href="" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></Link> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Pricing Section */}


	</>
	);
};
export default PricingTable
