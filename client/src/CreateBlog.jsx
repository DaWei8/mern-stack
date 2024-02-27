import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const handleCreateBlog = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createblog", {
        title,
        content,
      })
      .then((response) => {
        console.log(response);
        navigate("/blogs");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="d-flex row justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50 ">
        <h3>Create Blog</h3>
        <form onSubmit={handleCreateBlog} action="POST">
          <div className="mb-3">
            <label htmlFor="blogtitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="blogtitle"
              aria-describedby="blogcontent"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blogcontent" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="blogcontent"
              rows="3"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}
