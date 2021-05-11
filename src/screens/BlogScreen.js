import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";

const API_TOKEN = process.env.REACT_APP_TOKEN;
const API_URL = process.env.REACT_APP_API_URL;

const BlogScreen = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [categories, setCategories] = useState([]);

  const retrieveBlogs = () => {
    setLoading(true);
    fetch(`${API_URL}/posts?page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setBlogs(response);
        console.log(response)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const retrieveCategories = () => {
    fetch(`${API_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", response);
        setCategories(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    retrieveCategories();
    retrieveBlogs();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <Header></Header>

        <div className="container">
          <div></div>
          <div className="blog-container">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                content={blog.content}
                img={blog.img_url}
                createdDate={blog.created_at}
                category={blog.category}
                loading={loading}
              ></BlogCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
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
