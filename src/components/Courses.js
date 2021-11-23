import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Courses = () => {
  const courseList = ["Reac", "Angular", "Vue", "NodeJs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <>
      <div>
        <h3>courses list</h3>
      </div>
      {/* NavLinks need whole path /learn/course/...*/}

      <NavLink to={`/learn/courses/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>

      <Outlet></Outlet>
    </>
  );
};

export default Courses;
