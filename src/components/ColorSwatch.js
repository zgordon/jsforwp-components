import React from "react";
// import styled from "styled-components";
import "./ColorSwatch.css";

const ColorSwatch = ({ color }) => {
  return (
    <>
      <p>{color}</p>
      <section className="color-swatch">
        <div style={{ backgroundColor: `var(--${color}-lightest)` }}>
          {/* <p>{colors.lightest}</p> */}
        </div>
        {color != "red" && color != "purple" && (
          <>
            <div style={{ backgroundColor: `var(--${color}-lighter)` }}>
              {/* <p>{colors.lighter}</p> */}
            </div>
            <div style={{ backgroundColor: `var(--${color}-light)` }}>
              {/* <p>{colors.light}</p> */}
            </div>
          </>
        )}
        <div style={{ backgroundColor: `var(--${color})` }}>
          {/* <p style={{ color: "white" }}>{colors.main}</p> */}
        </div>
      </section>
    </>
  );
};

export default ColorSwatch;
