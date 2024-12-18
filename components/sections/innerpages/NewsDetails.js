import { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { reduceGroupedItem } from "@/utils/util-fetch";
import styles from "./NewsDetails.module.css";
import { currentArticle } from "@/components/lib/helpers";
import MarkdownRenderer from "../MarkdownRenderer";

const style = {
  textAlign: "center",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  color: "#333",
};

export default function NewsDetails({ articleDetails, articles }) {
  const [article, setArticle] = useState(articleDetails);
  const Tags = reduceGroupedItem(articles);
  const router = useRouter();
  const { id } = router.query;

  const { prevArticle = {}, nextArticle = {} } = currentArticle(articles, id);

  useEffect(() => {
    if (id) loadArticle(id);
  }, [id]);

  const loadArticle = (id) => {
    const newArticle = articles.find((article) => article.id === id);
    setArticle(newArticle);
  };

  const handleTags = useCallback((item) => {
    const foundArticle = articles.find((article) => article.mainHeading === item);
    if (foundArticle) {
      const itemId = foundArticle.id;
      router.push({
        pathname: "/article-details",
        query: { id: itemId }
      });
    } else {
      console.error("Article not found for the given item:", item);
    }
  }, []);

  return (
    <>
      <Suspense fallback=<p style={style}>Loading...</p>>
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
                    <div className="blog-details__text-2">
                      <MarkdownRenderer posts={[article]} isAll isAllBlog />
                    </div>
                  </div>
                  <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                      {" "}
                      <span>Tags</span> <Link href="#">{article.tag}</Link>{" "}
                    </p>
                    <div className="blog-details__social-list">
                      {" "}
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>{" "}
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>{" "}
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>{" "}
                      <Link href="#">
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
                      {articles.slice(0, 3).map((article, index) => (
                        <li key={index}>
                          <div className="sidebar__post-image">
                            {" "}
                            <img src={article.img} alt="" />{" "}
                          </div>
                          <div className="sidebar__post-content">
                            <h3>
                              {" "}
                              <span className="sidebar__post-content-meta">
                                <i className="fas fa-user-circle"></i>
                                {article.author}
                              </span>{" "}
                              <Link href={`article-details?id=${article.id}`}>
                                {article.mainHeading}
                              </Link>
                            </h3>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      {Tags.map((group) => (
                        <li key={group.label} className={styles.categoryItem}>
                          <select
                            className={styles.select}
                            onChange={(e) => handleTags(e.target.value)}
                          >
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
                          {tag.label}
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
