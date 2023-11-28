import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

function App() {
  return (
    <div className="container">
      <Avatar />

      <div>
        <Heading />

        <Skillset />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile.jpg" alt="Ediana Ekanem" />;
}
function Heading() {
  return (
    <div>
      <h1 className="heading">Ediana Ekanem</h1>
      <p className="heading" style={{ padding: "0 5px" }}>
        Front End Developer and teacher at Start Innovation hub, Uyo, Nigeria. I
        love music and playing video games, I cook and i love good food as well
        I speak Ibibio, English and Pigin English
      </p>
    </div>
  );
}
function Skillset() {
  return (
    <div className="skillset">
      <Skill skill="Html " emoji="💪" color="#FF0000" />
      <Skill skill="Css " emoji="💪" color="#722F37" />
      <Skill skill="Javascript " emoji="👶" color="#FFFF00" />
      <Skill skill="Git and GitHub " emoji="💪" color="#0000FF" />
      <Skill skill="React " emoji="👶" color="#ADD8E6" />
      <Skill skill="Linux " emoji="👶" color="#FFC0CB" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skillset" style={{ backgroundColor: props.color }}>
      <div>{props.skill}</div>
      <div>{props.emoji}</div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
