import { Suspense, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { reduceGroupedItem } from "@/utils/util-fetch";
import styles from "./NewsDetails.module.css";
import { currentArticle } from "@/components/lib/helpers";

export default function NewsDetails({ articleDetails, articles }) {
  const [article, setArticle] = useState(articleDetails);
  const Tags = reduceGroupedItem(articles);
  const router = useRouter();
  const { id } = router.query;

  const { prevArticle = {}, nextArticle = {} } = currentArticle(articles, id);

  useEffect(() => {
    if(id) loadArticle(id)
  }, [id])
  
  const loadArticle = (id) => {
    const newArticle = articles.find((article) => article.id === id);
    setArticle(newArticle);
  };

  return (
    <>
      <Suspense fallback=<p>Loading...</p>>
        {/* Blog Details Start */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img">
                    <img src={article.img} alt="" />
                    <div className="blog-details__date">
                      {article.date && article.date.date && (
                        <span className="day">{article.date.date}</span>
                      )}
                      {article.date && article.date.month && (
                        <span className="month">{article.date.month}</span>
                      )}
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <ul className="list-unstyled blog-details__meta">
                      <li>
                        <Link href="article-details">
                          <i className="fas fa-user-circle"></i>{" "}
                          {article.author}
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="article-details">
                          <i className="fas fa-comments"></i> 02 Comments
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-details__title">
                      {article.mainHeading}
                    </h3>
                    <p className="blog-details__text-2">
                      Mauris non dignissim purus, ac commodo diam. Donec sit
                      amet lacinia nulla. Aliquam quis purus in justo pulvinar
                      tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
                      feugiat at nisi. Quisque vitae odio nec lacus interdum
                      tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae
                      est aliquet pellentesque vitae et nunc. Sed vitae leo
                      vitae nisl pellentesque semper.
                    </p>
                    <p className="blog-details__text-2">
                      Mauris non dignissim purus, ac commodo diam. Donec sit
                      amet lacinia nulla. Aliquam quis purus in justo pulvinar
                      tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
                      feugiat at nisi. Quisque vitae odio nec lacus interdum
                      tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae
                      est aliquet pellentesque vitae et nunc. Sed vitae leo
                      vitae nisl pellentesque semper.
                    </p>
                    <p className="blog-details__text-2">
                      Mauris non dignissim purus, ac commodo diam. Donec sit
                      amet lacinia nulla. Aliquam quis purus in justo pulvinar
                      tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
                      feugiat at nisi. Quisque vitae odio nec lacus interdum
                      tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae
                      est aliquet pellentesque vitae et nunc. Sed vitae leo
                      vitae nisl pellentesque semper.
                    </p>
                  </div>
                  <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                      {" "}
                      <span>Tags</span>{" "}
                      <Link href="article-details">{article.tag}</Link>{" "}
                    </p>
                    <div className="blog-details__social-list">
                      {" "}
                      <Link href="article-details">
                        <i className="fab fa-twitter"></i>
                      </Link>{" "}
                      <Link href="article-details">
                        <i className="fab fa-facebook"></i>
                      </Link>{" "}
                      <Link href="article-details">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>{" "}
                      <Link href="article-details">
                        <i className="fab fa-instagram"></i>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="nav-links">
                    {Object.keys(prevArticle).length > 0 ? (
                      <div className="prev">
                        <Link
                          href={`/article-details?id=${prevArticle.id}`}
                          rel="prev"
                          onClick={() => loadArticle(prevArticle.id)}
                        >
                          {prevArticle.mainHeading}
                        </Link>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    {Object.keys(nextArticle).length > 0 ? (
                      <div className="next">
                        <Link
                          href={`/article-details?id=${nextArticle.id}`}
                          rel="prev"
                          onClick={() => loadArticle(nextArticle.id)}
                        >
                          {nextArticle.mainHeading}
                        </Link>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                      <input type="search" placeholder="Search here" />
                      <button type="submit">
                        <i className="lnr-icon-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Latest Posts</h3>
                    <ul className="sidebar__post-list list-unstyled">
                      <li>
                        <div className="sidebar__post-image">
                          {" "}
                          <img src="/images/resource/news-1.jpg" alt="" />{" "}
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            {" "}
                            <span className="sidebar__post-content-meta">
                              <i className="fas fa-user-circle"></i>Admin
                            </span>{" "}
                            <Link href="article-details">
                              Top crypto exchange influencers
                            </Link>
                          </h3>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image">
                          {" "}
                          <img src="/images/resource/news-2.jpg" alt="" />{" "}
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            {" "}
                            <span className="sidebar__post-content-meta">
                              <i className="fas fa-user-circle"></i>Admin
                            </span>{" "}
                            <Link href="article-details">
                              Necessity may give us best virtual court
                            </Link>{" "}
                          </h3>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image">
                          {" "}
                          <img src="/images/resource/news-3.jpg" alt="" />{" "}
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            {" "}
                            <span className="sidebar__post-content-meta">
                              <i className="fas fa-user-circle"></i>Admin
                            </span>{" "}
                            <Link href="article-details">
                              You should know about business plan
                            </Link>{" "}
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      {Tags.map((group) => (
                        <li key={group.label} className={styles.categoryItem}>
                          <select className={styles.select}>
                            <option disabled selected>
                              {group.label}
                            </option>
                            {group.value.map((item, index) => (
                              <option value={item} key={index}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags</h3>
                    <div className="sidebar__tags-list">
                      {Tags.map((tag, index) => (
                        <Link href="#" key={tag + index}>
                          {tag.label.split(" ")[0]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Details End */}
      </Suspense>
    </>
  );
}
