import Link from "next/link";
export default function NewsGrid({ articles }) {
  return (
    <>
      {/*  News Section  */}
      <section className="news-section">
        <div className="auto-container">
          <div className="row">
            {/*  News Block  */}
            {articles.map((article) => (
              <div
                className="news-block col-lg-4 col-sm-6 wow fadeInUp"
                key={article.tag}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/article-details?id=${article.id}`}>
                        <img src={article.img} alt="" />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <h6 className="date">
                      {article.date && article.date.date && (
                        <span>{article.date.date}</span>
                      )}
                      <br />
                      {article.date && article.date.month && (
                        <span>{article.date.month}</span>
                      )}{" "}
                    </h6>
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle"></i> {article.author}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i> 4 Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href={`article-details?id=${article.id}`}>
                        {article.mainHeading}
                      </Link>
                    </h4>
                    <div className="text">
                      {article.sections[0]?.content[4]?.substring(0, 92) ||
                        "No description available."}
                      ...{" "}
                    </div>
                    <Link
                      href={`article-details?id=${article.id}`}
                      className="read-more"
                    >
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End News Section  */}
    </>
  );
}
