import React from "react";
import "./CourseTimeline.css";

const CourseTimeline = props => {
  return (
    <div className="course-timeline">
      <div className="line" />
      <section>
        <article>
          <h3>Section 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos porro
            architecto a assumenda distinctio impedit ut excepturi non.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h3>Section 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos porro
            architecto a assumenda distinctio impedit ut excepturi non.
          </p>
        </article>
      </section>
      <section>
        <article className="full">
          <h3>Section 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos porro
            architecto a assumenda distinctio impedit ut excepturi non.
          </p>
        </article>
      </section>
    </div>
  );
};

export default CourseTimeline;
