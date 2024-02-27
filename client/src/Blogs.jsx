import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getblogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white">
      <h2 className=" ms-3 " >Here are your blogs</h2>
      {blogs ? (
        blogs.map((blog, index) => {
          console.log("================================");
          return (
            <div className="bg-white p-3 rounded w-50" key={index}>
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <div className=" w-50 ">
          <p>You don&#39;t have any blogs yet</p>
        </div>
      )}
      <Link to={"/createblog"} className=" ms-3 btn btn-primary">
        Create Blog
      </Link>
    </div>
  );
}
