import Link from "next/link";

export default function TeamGrid() {

  return (
    <>


  {/* Team Section */}
  <section className="team-section bg-light">
    <div className="auto-container">
      <div className="row"> 
        {/* Team block */}
        <div className="team-block col-lg-3 col-sm-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-1.jpg" alt=""/></Link></figure>
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
        {/* Team block */}
        <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-2.jpg" alt=""/></Link></figure>
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
        {/* Team block */}
        <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-3.jpg" alt=""/></Link></figure>
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
        {/* Team block */}
        <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-4.jpg" alt=""/></Link></figure>
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
  {/* End Team Section */}

    </>
  )
}
