// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";

export default function App() {
  return (
    <div className=" d-grid ">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className=" pe-5 container-fluid">
            <a className="navbar-brand" href="#">
              Blogga
            </a>

            <div className="" id="navbarNav">
              <ul className=" d-flex gap-5 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/home"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login | Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
