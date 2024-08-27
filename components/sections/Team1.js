import Link from "next/link"
const Team1 = () => {
  return (
    <>
      <section className="team-section">
        <div className="icon-lines-2"></div>
        <div className="auto-container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7"> <span className="sub-title">Our team members</span>
                <h2>Meet our professional <br/>team members</h2>
              </div>
              <div className="col-lg-5">
                <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe looking impression on visitors.</div>
              </div>
            </div>
          </div>
          <div className="row"> 
            <div className="team-block col-lg-3 col-sm-6 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="page-team-details"><img src="images/resource/team-1.jpg" alt=""/></Link></figure>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Jessica Brown</Link></h4>
                    <span className="designation">Manager</span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="page-team-details"><img src="images/resource/team-2.jpg" alt=""/></Link></figure>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Kevin Martin</Link></h4>
                    <span className="designation">Manager</span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="page-team-details"><img src="images/resource/team-3.jpg" alt=""/></Link></figure>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Christine Eve</Link></h4>
                    <span className="designation">Manager</span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="page-team-details"><img src="images/resource/team-4.jpg" alt=""/></Link></figure>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">David Smith</Link></h4>
                    <span className="designation">Manager</span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
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
export default Team1
