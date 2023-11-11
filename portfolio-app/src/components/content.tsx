import "./content.css";
import { ResumeViewContextConsumer } from "./context";

const Content = () => {
  return (
    <div style={{ height: 300, width: 500 }}>
      <h1>🤖 Hello</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 350,
          padding: 10,
        }}
      >
        <ResumeViewContextConsumer>
          {({ toggleValue }) => (
            <button className="resume" onClick={toggleValue}>
              RESUME
            </button>
          )}
        </ResumeViewContextConsumer>

        <button>PROJECTS</button>
      </div>
      <div style={{ marginTop: 50 }}>
        <p>
          A software developer with more than 8 years experience in software
          development. Contributing my skills in both frontend and backend and
          often in devops space.
        </p>
        <p>
          Advance knowledge in <strong>ReactJS</strong>,<strong>NodeJS</strong>,{" "}
          <strong>Git</strong> and <strong>AWS</strong>.
        </p>
      </div>
    </div>
  );
};

export default Content;
