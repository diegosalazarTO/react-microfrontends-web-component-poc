import { Link } from "react-router-dom";
import { navigation } from "./Constant";

function Home() {
  return (
    <>
      <div className="container mt-5">
        {navigation.map((navigationItem, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-xs-12">
                <h2>{navigationItem.title}</h2>
                <Link
                  to={{
                    pathname: navigationItem.link.url,
                  }}
                >
                  {navigationItem.link.text}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
