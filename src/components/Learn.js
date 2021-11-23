import { Link, Outlet } from "react-router-dom";
export const Learn = () => {
  return (
    <div className="wrapper">
      <h1>learn</h1>
      <h4>learn section</h4>
      {/* difference between a tag and <Link/>: */}
      {/* a tag reloads the page -> link tag doesen't */}

      <Link to="/learn/courses">
        <button
          style={{ color: "black", textDecoration: "none", cursor: "pointer" }}
        >
          courses
        </button>
      </Link>

      <Link to="/learn/bundles">
        <button
          style={{ color: "black", textDecoration: "none", cursor: "pointer" }}
        >
          bundle
        </button>
      </Link>

      {/* renders the element on the url */}
      <Outlet />
    </div>
  );
};
