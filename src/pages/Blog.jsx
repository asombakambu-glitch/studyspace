import axios from "axios";
import React, { useState } from "react";

const Blog = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [user_name, setUserName] = useState("");
  const [comments, setComments] = useState("");
  const [publish_date, setPublishDate] = useState("");

  const blog = async (e) => {
    e.preventDefault();

    setLoading("Please wait...");
    setError("");
    setMessage("");

    const data = new FormData();
    data.append("user_name", user_name);
    data.append("comments", comments);
    data.append("publish_date", publish_date);

    try {
      const response = await axios.post(
        "http://asombakifaru.alwaysdata.net/api/blog",
        data
      );

      setMessage(response.data.message);
      setLoading("");
      setUserName("");
      setComments("");
      setPublishDate("");
    } catch (error) {
      setError(error.message);
      setLoading("");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-info">Community Blog</h1>
      <p className="text-center">
        Share motivation, advice and study tips with other students.
      </p>

      <h5 className="text-warning text-center">{loading}</h5>
      <h5 className="text-danger text-center">{error}</h5>
      <h5 className="text-success text-center">{message}</h5>

      <form onSubmit={blog} className="card p-4 shadow mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Write something helpful..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>

        <input
          type="date"
          className="form-control mb-3"
          value={publish_date}
          onChange={(e) => setPublishDate(e.target.value)}
          required
        />

        <button className="btn btn-info">Post</button>
      </form>
    </div>
  );
};

export default Blog;