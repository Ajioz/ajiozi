import Link from "next/link"
const Services1 = () => {
  return (
    <>
      <section className="services-section pt-0">
        <div className="icon-lines-3 bounce-y"></div>
        <div className="bg bg-pattern-13"></div>
        <div className="auto-container">
          <div className="row"> 
            <div className="service-block col-lg-4 col-sm-6 wow fadeInUp">
              <div className="inner-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/services-1.jpg" alt="Image"/></Link></figure>
                <div className="content-box"> <i className="icon flaticon-recommend"></i>
                  <h4 className="title"><Link href="page-service-details">Perfect solutions <br/>that business demands</Link></h4>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="inner-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/services-2.jpg" alt="Image"/></Link></figure>
                <div className="content-box"> <i className="icon flaticon-digital-services"></i>
                  <h4 className="title"><Link href="page-service-details">Choose the best <br/>IT service company</Link></h4>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="inner-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/services-3.jpg" alt="Image"/></Link></figure>
                <div className="content-box"> <i className="icon flaticon-technology"></i>
                  <h4 className="title"><Link href="page-service-details">We know how to <br/>make a technology</Link></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-text wow fadeInLeft">
            <div className="text">Digital agency services built specifically for your business.</div>
            <Link href="#" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Discover More</span></Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services1
