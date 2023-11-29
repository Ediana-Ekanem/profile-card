import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advance",
    color: "#FF0000",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#FFFF00",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#98fb98",
  },
  {
    skill: "Bootstrap",
    level: "advance",
    color: "#FFC107",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#ADD8E6",
  },
  {
    skill: "Linux",
    level: "intermediate",
    color: "#C0C0C0",
  },
  {
    skill: "TailWind",
    level: "intermediate",
    color: "#1F51FF",
  },
];

function App() {
  return (
    <div className="container">
      <Avatar />
      <Heading />
      <Skillset />
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
        Front End Developer and Web Dev trainer at Start Innovation hub, Uyo,
        Nigeria. I love music and playing video games, I cook and i love good
        food as well. I speak Ibibio, English and Pigin-English.
      </p>
    </div>
  );
}

function Skillset() {
  return (
    <div className="skillset">
      {/* Working with props and rendering list  */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skillset" style={{ backgroundColor: color }}>
      <div>{skill}</div>
      {/* Conditionally setting  text, Ternary operator couldn't work here cos it had three possibilities | using the and && operator ---Laveraging short circuiting */}
      {level === "beginner" && "👶"}
      {level === "intermediate" && "👍"}
      {level === "advance" && "💪"}
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
