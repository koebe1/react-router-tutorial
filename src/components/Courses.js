import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Courses = () => {
  const courseList = ["React", "Angular", "Vue", "NodeJs"];
  const [courseName, setCourseName] = useState(null);
  useEffect(() => {
    setCourseName(courseList[Math.floor(Math.random() * courseList.length)]);
  }, []);

  return (
    <>
      <div>
        <h3>courses list</h3>
      </div>
      {/* NavLinks need whole path /learn/course/...*/}

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "lightgreen" : "yellow"
          };
        }}
        to={`/learn/courses/${courseName}`}
        className="btn btn-light"
      >
        {courseName}
      </NavLink>
      <NavLink to={`/learn/courses/test`} className={"btn btn-light"}>
        test
      </NavLink>

      <Outlet></Outlet>
    </>
  );
};

export default Courses;
