import React from "react";
import "./LessonList.css";

const Toggle = ({ label }) => (
  <button onClick={() => alert("df")} className={`toggle`}>
    {label}
  </button>
);
const LessonList = () => {
  return (
    <>
      <div className="lesson-list">
        <h3>Course Name</h3>
        <ul>
          <li>
            <ul>
              <h4 className="completed active">
                <a href="#">Section 1</a>
                <Toggle label="-" />
              </h4>
              <li className="active completed">
                <a href="#1">Lesson 1</a>
              </li>
              <li className="completed">
                <a href="#1">Lesson 2</a>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="active">
              <a href="#">Section 2</a>
              <Toggle label="-" />
            </h4>
            <ul>
              <li className="active">
                <a href="#1">Lesson 3</a>
              </li>
              <li>
                <a href="#1">Lesson 4</a>
              </li>
            </ul>
          </li>
          <li>
            <h4>
              <a href="#">Section 3</a>
              <Toggle label="+" />
            </h4>
          </li>
          <li>
            <h4>
              <a href="#">Section 4</a>
              <Toggle label="+" />
            </h4>
          </li>
          <li>
            <h4 className="completed">
              <a href="#">
                Section 5 <span className="timestamp">[00:12:00]</span>
              </a>
              <Toggle label="+" />
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LessonList;
