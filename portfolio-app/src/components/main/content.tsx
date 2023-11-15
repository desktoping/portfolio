import "./content.css";
import { ResumeViewContextConsumer } from "../context";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        <h1>🤖 Hello</h1>
        <div
          id="button-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <ResumeViewContextConsumer>
            {({ toggleValue }) => (
              <button className="primary" onClick={toggleValue}>
                RESUME
              </button>
            )}
          </ResumeViewContextConsumer>

          <Link to="/projects">
            <button style={{ height: 40, width: 150 }}>PROJECTS</button>
          </Link>
        </div>
        <div style={{ marginTop: 50 }}>
          <p>
            A software developer with more than 8 years experience in software
            development. Contributing my skills in both frontend and backend and
            often in devops space.
          </p>
          <p>
            Advance knowledge in <strong>ReactJS</strong>,
            <strong>NodeJS</strong>, <strong>Git</strong> and{" "}
            <strong>AWS</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
