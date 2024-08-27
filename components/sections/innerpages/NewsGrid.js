import Link from 'next/link';
export default function NewsGrid() {
  return (
    <>

  {/*  News Section  */}
  <section className="news-section">
    <div className="auto-container">
      <div className="row"> 
        {/*  News Block  */}
        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
            </div>
            <div className="content-box">
              <h6 className="date">30 <br/>May</h6>
              <ul className="post-info">
                <li><i className="fa fa-user-circle"></i> by Admin</li>
                <li><i className="fa fa-comments"></i> 2 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Professional technology  and information solutions…</Link></h4>
              <div className="text">Had cattle there form heston from there and years dry canyon.</div>
              <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block  */}
        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="100ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
            </div>
            <div className="content-box">
              <h6 className="date">30 <br/>May</h6>
              <ul className="post-info">
                <li><i className="fa fa-user-circle"></i> by Admin</li>
                <li><i className="fa fa-comments"></i> 2 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Professional technology  and information solutions…</Link></h4>
              <div className="text">Had cattle there form heston from there and years dry canyon.</div>
              <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block  */}
        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
            </div>
            <div className="content-box">
              <h6 className="date">30 <br/>May</h6>
              <ul className="post-info">
                <li><i className="fa fa-user-circle"></i> by Admin</li>
                <li><i className="fa fa-comments"></i> 2 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Professional technology  and information solutions…</Link></h4>
              <div className="text">Had cattle there form heston from there and years dry canyon.</div>
              <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block  */}
        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
            </div>
            <div className="content-box">
              <h6 className="date">30 <br/>May</h6>
              <ul className="post-info">
                <li><i className="fa fa-user-circle"></i> by Admin</li>
                <li><i className="fa fa-comments"></i> 2 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Professional technology  and information solutions…</Link></h4>
              <div className="text">Had cattle there form heston from there and years dry canyon.</div>
              <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block  */}
        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="500ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
            </div>
            <div className="content-box">
              <h6 className="date">30 <br/>May</h6>
              <ul className="post-info">
                <li><i className="fa fa-user-circle"></i> by Admin</li>
                <li><i className="fa fa-comments"></i> 2 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Professional technology  and information solutions…</Link></h4>
              <div className="text">Had cattle there form heston from there and years dry canyon.</div>
              <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block  */}
        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
            </div>
            <div className="content-box">
              <h6 className="date">30 <br/>May</h6>
              <ul className="post-info">
                <li><i className="fa fa-user-circle"></i> by Admin</li>
                <li><i className="fa fa-comments"></i> 2 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Professional technology  and information solutions…</Link></h4>
              <div className="text">Had cattle there form heston from there and years dry canyon.</div>
              <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End News Section  */}

    </>
  )
}
