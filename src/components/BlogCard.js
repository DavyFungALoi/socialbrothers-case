import React from "react";

const BlogCard = (props) => {
  const { title, content, category, img, createDate, loading } = props;

  return (
    <div className="blog-card-container">
      <div className="blogcard-header-container">
        {category ? <div>{category.name}</div> : <div></div>}
      </div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default BlogCard;
