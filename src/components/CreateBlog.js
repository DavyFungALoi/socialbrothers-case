import React, { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="berichtnaam">Berichtnaam</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
        ></input>
        <label htmlFor="category">Categorie</label>
        <input
          type="category"
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          value={category}
        ></input>
        <label htmlFor="bericht">Bericht</label>
        <textarea
          type="text"
          onChange={(e) => setContent(e.target.value)}
          id="password"
          value={content}
        ></textarea>
        <button type="submit">Bericht Aanmaken</button>
      </form>
    </div>
  );
};

export default CreateBlog;
