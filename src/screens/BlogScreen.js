import React, { useEffect } from "react";
import Header from "../components/Header";

const API_TOKEN = process.env.REACT_APP_TOKEN;
const API_URL = process.env.REACT_APP_API_URL;

/// `${API_URL}/categories`
const retrieveBlogs = () => {
  fetch(`${API_URL}/categories`, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      token: `${API_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log("Success:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const BlogScreen = () => {
  console.log(API_TOKEN);
  console.log(API_URL);
  useEffect(() => {
    retrieveBlogs();
  }, []);
  return (
    <div>
      <Header></Header>
      Blog
    </div>
  );
};

export default BlogScreen;

/*http://178.62.198.162/api/categories
const retrieveBlogs = () => {

    pj11daaQRz7zUIH56B9Z
  fetch("https://example.com/profile", {
    method: "get", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

*/
