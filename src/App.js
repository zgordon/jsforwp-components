import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CourseTimeline from "./components/CourseTimeline";
import LessonList from "./components/LessonList";
import ColorSwatch from "./components/ColorSwatch";
import Typography from "./components/Typography";

class App extends Component {
  render() {
    return (
      <>
        <div className="page">
          <CourseTimeline />
        </div>
        <div className="page">
          <LessonList />
        </div>
        <div className="page">
          <Typography />
        </div>
        <div className="page">
          <h3>Color Pallete</h3>
          <ColorSwatch color="yellow" />
          <ColorSwatch color="green" />
          <ColorSwatch color="blue" />
          <ColorSwatch color="purple" />
          <ColorSwatch color="red" />
          <ColorSwatch color="mono" />
        </div>
      </>
    );
  }
}

export default App;
