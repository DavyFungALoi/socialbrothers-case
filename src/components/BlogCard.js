import React from "react";

const BlogCard = (props) => {
  const { title, content, category, img, createDate } = props;

  const splitDate = createDate.split(" ")[0];
  const dayMonth = splitDate.slice(6);
  const year = splitDate.substring(0, 4);
  const finishedDate = `${dayMonth}-${year}`;
  console.log(finishedDate);

  return (
    <div className="blog-card">
      <div className="blog-card__header">
        <div>{finishedDate}</div>
        {category ? (
          <div className="blog-card__category">{category.name}</div>
        ) : (
          <div></div>
        )}
      </div>
      <h1 className="blog-card__title">{title}</h1>
      <div className="blog-card__content">{content}</div>
    </div>
  );
};

export default BlogCard;
