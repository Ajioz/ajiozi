// import { useRouter } from "next/router";
import Link from "next/link";

const News1 = ({ articles }) => {
  // const { push } = useRouter();

  // const handleClick = (id) => {
  //   push({ pathname: "/article-details", query: { id } });
  // };

  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            {" "}
            <span className="sub-title">From the Blog</span>
            <h2>
              Check the latest news & <br />
              articles updates
            </h2>
          </div>
          <div className="row">
            {articles?.slice(0, 3)?.map((item, i) => (
              <div
                className="news-block col-lg-4 col-sm-6 wow fadeInUp"
                key={item.id}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="a#" onClick={() => handleClick(item.id)}>
                        <img src={item.img} alt="articleImg" />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <h6 className="date">
                      {item.date && item.date.date && (
                        <span>{item.date.date}</span>
                      )}
                      <br />
                      {item.date && item.date.month && (
                        <span>{item.date.month}</span>
                      )}{" "}
                    </h6>
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle"></i> {item.author}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i> {articles.length}
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href={`/article-details?id=${item.id}`}>
                        {item.mainHeading}
                      </Link>
                    </h4>
                    <div className="text">
                      {item.sections[0]?.content[4]?.substring(0, 92) ||
                        "No description available."}
                      ...{" "}
                    </div>
                    <Link
                      href={`/article-details?id=${item.id}`}
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
    </>
  );
};
export default News1;
