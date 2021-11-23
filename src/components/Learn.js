import { Link, Outlet } from "react-router-dom";
export const Learn = () => {
  return (
    <div className="wrapper">
      <h1>learn</h1>
      <h4>learn section</h4>
      {/* difference between a tag and <Link/>: */}
      {/* a tag reloads the page -> link tag doesen't */}

      <Link to="/learn/courses" className="btn btn-light">
        courses
      </Link>

      <Link to="/learn/bundles" className="btn btn-light">
        bundle
      </Link>

      {/* renders the element on the url */}
      <Outlet />
    </div>
  );
};
