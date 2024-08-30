// import Link from "next/link"
const Award2 = () => {
  return (
    <>
      <div className="award-section">
        <div className="bg-award"></div>
        <div className="auto-container">
          <div className="row"> 
            <div className="content-column col-lg-6 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title light text-gradient"> <span className="sub-title">Awards</span>
                  <h2>Company awards & <br/>achievements</h2>
                </div>
                <div className="bottom-box">
                  <div className="text">Lorem ipsum dolor scaccumsan proin phasell tibulum massa tellus morbi magna</div>
                  <ul className="list-style-three light">
                    <li><i className="icon fa fa-check"></i>High Marketing Solution</li>
                    <li><i className="icon fa fa-check"></i>High Success Rate</li>
                    <li><i className="icon fa fa-check"></i>We grow business</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-column col-lg-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="inner-column">
                <div className="row"> 
                  <div className="award-block col-lg-4 col-sm-6">
                    <div className="inner-box">
                      <div className="date">2018 <br/>Award</div>
                      <img src="images/resource/award-1.png" alt="Image"/>
                      <h6 className="title">Best <br/>Consulting</h6>
                    </div>
                  </div>
                  <div className="award-block col-lg-4 col-sm-6">
                    <div className="inner-box">
                      <div className="date">2020 <br/>Award</div>
                      <img src="images/resource/award-2.png" alt="Image"/>
                      <h6 className="title">Best <br/>Brand</h6>
                    </div>
                  </div>
                  <div className="award-block col-lg-4 col-sm-6">
                    <div className="inner-box">
                      <div className="date">2011 <br/>Award</div>
                      <img src="images/resource/award-3.png" alt="Image"/>
                      <h6 className="title">Star of the <br/>year</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Award2
