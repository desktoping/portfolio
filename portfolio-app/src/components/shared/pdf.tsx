import { Document, Page } from "react-pdf";
import { ResumeViewContextConsumer } from "../context";
import { useState } from "react";

// const defaultLayoutPluginInstance = defaultLayoutPlugin();

const Resume = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#d8c168",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div style={{ textAlign: "right", width: "100%" }}>
        <ResumeViewContextConsumer>
          {({ toggleValue }) => (
            <>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <button>DOWNLOAD</button>
              </a>
              <button onClick={toggleValue}>CLOSE</button>
            </>
          )}
        </ResumeViewContextConsumer>
      </div>
      <div>
        <Document file="/resume.pdf" loading>
          <Page renderTextLayer={false} pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};
export default Resume;
