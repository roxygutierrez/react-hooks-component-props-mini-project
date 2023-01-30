import React from "react";
import Article from "./Article.js";

const ArticleList = (props) => {
  const postArticles = props.posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });
  return <main>{postArticles}</main>;
};

export default ArticleList;
