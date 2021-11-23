import React from "react";
import { useParams } from "react-router-dom";

const CourseId = () => {
  // returns an object of the params for the route rendered
  const { courseId } = useParams();

  return (
    <div>
      <h1>URL Params is: {courseId} </h1>
    </div>
  );
};

export default CourseId;
