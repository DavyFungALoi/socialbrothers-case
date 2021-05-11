import React from "react";

const BlogCard = (props) => {
  const { title, content, img, createDate } = props;
  return (
    <div className="blog-card-container">
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default BlogCard;
