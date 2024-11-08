import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as Syntax } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import Image from "next/image";
import styles from "./MarkdownRenderer.module.css";

if (Syntax.registerLanguage) {
  Syntax.registerLanguage("js", js);
  Syntax.registerLanguage("css", css);
}

const MarkdownRenderer = ({ posts, isAll, isAllBlog }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match?.[1] || "plaintext";
      const code = children?.toString();

      return !inline && match ? (
        <div
          className={`${styles.codeBlock} ${
            isAllBlog ? styles.codeBlockMax : ""
          }`}
        >
          <button
            onClick={() => handleCopy(code)}
            className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <Syntax style={atomDark} language={language} PreTag="div" {...props}>
            {code}
          </Syntax>
        </div>
      ) : (
        <code className={styles.inlineCode} {...props}>
          {children}
        </code>
      );
    },
    p(paragraph) {
      const { node } = paragraph;
      if (node?.children?.[0]?.tagName === "img") {
        const image = node.children[0];
        const ImgSrc = image.properties.src.startsWith("/")
          ? image.properties.src
          : `/${image.properties.src}`;
        return (
          <div className={styles.paragraph}>
            <Image
              src={ImgSrc}
              alt={image.alt || "Image"}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          {/* <h2>{post.mainHeading}</h2> */}
          {/* <Image
                src={post.img}
                alt={post.mainHeading}
                width={600}
                height={300}
                className={styles.image}
              /> */}
          {!isAll && (
            <>
              <div className={styles.titleDate}>
                <h2>{post.mainHeading}</h2>
                <div className={styles.dateContainer}>
                  <div className={styles.date}>
                    <span className={styles.datePart}>{post.date?.date}</span>
                    <span className={styles.datePart}>{post.date?.month}</span>
                    <span className={styles.lastDatePart}>
                      {post.date?.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.author}>
                <span className={styles.tag}>{post.tag}</span>
                <p>
                  <strong>Author:</strong> {post.author}
                </p>
              </div>
            </>
          )}
          {post?.sections?.map((section, index) => (
            <div key={index} className={styles.section}>
              {section.heading && <h3>{section.heading}</h3>}
              {section.subheading && <h4>{section.subheading}</h4>}
              <ReactMarkdown components={components}>
                {section.content.join("\n")}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MarkdownRenderer;
