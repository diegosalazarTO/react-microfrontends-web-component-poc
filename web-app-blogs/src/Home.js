import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xs-12">
          <h2>Storage</h2>
          <Link
            to={{
              pathname: `/relay/localstorage`,
            }}
          >
            localStorage
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h2>Window Object</h2>
          <Link
            to={{
              pathname: `/relay/appconfig`,
            }}
          >
            AppConfig
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h2>Cookies</h2>
          <Link
            to={{
              pathname: `/relay/cookies`,
            }}
          >
            Cookies
          </Link>
        </div>
      </div>
      <div className="row">
        <h2>Blog Posts</h2>
        <Link
          to={{
            pathname: `/relay/blogs`,
          }}
        >
          Blog Posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
