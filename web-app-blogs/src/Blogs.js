import React from "react";
import { Link } from "react-router-dom";
import { arrBlogs } from "./Constant";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        {arrBlogs.map((blog) => {
          return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
              <div className="card">
                <Link
                  to={{
                    pathname: `/dashboard/blogdetail/${blog.blogID}`,
                    id: blog.blogID,
                    item: blog,
                  }}
                >
                  <div class="card-body">
                    <h5 class="card-title">{`#${blog.blogID}`}</h5>
                    <p class="card-text">{blog.blogName}</p>
                    <p class="card-text">{blog.blogDetail}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
