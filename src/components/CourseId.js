import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CourseId = () => {
  // returns an object of the params for the route rendered
  const { courseId } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <h5>URL Params is: {courseId} </h5>
      <button
        onClick={() => {
          navigate("/dashboard", { state: "299" });
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={"100"} className="btn btn-light">
        Test Link
      </Link>
    </div>
  );
};

export default CourseId;
