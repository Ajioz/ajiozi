const Features2 = () => {
  return (
    <>
      <section className="features-section-three">
        <div className="bg bg-pattern-5"></div>
        <div className="large-container">
          <div className="sec-title text-center"> <span className="sub-title">Company Features</span>
            <h2>Improve & Enhance your <br/>Business with us</h2>
          </div>
          <div className="row"> 
            <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="images/resource/feature-1.jpg" alt="Image"/></figure>
                  <h4 className="word">G</h4>
                </div>
                <div className="content-box">
                  <h4 className="title"><a href="page-about.html">Gaming and <br/>entertainment</a></h4>
                  <div className="text">We have to a tendency to believe the idea</div>
                  <a href="page-about.html" className="read-more"><i className="icon fa fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
            <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="images/resource/feature-2.jpg" alt="Image"/></figure>
                  <h4 className="word">B</h4>
                </div>
                <div className="content-box">
                  <h4 className="title"><a href="page-about.html">Business and <br/>finance</a></h4>
                  <div className="text">We have to a tendency to believe the idea</div>
                  <a href="page-about.html" className="read-more"><i className="icon fa fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
            <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="images/resource/feature-3.jpg" alt="Image"/></figure>
                  <h4 className="word">I</h4>
                </div>
                <div className="content-box">
                  <h4 className="title"><a href="page-about.html">Information &<br/>technology</a></h4>
                  <div className="text">We have to a tendency to believe the idea</div>
                  <a href="page-about.html" className="read-more"><i className="icon fa fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features2
