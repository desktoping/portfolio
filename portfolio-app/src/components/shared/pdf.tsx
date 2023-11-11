import { Document, Page } from "react-pdf";
import { ResumeViewContextConsumer } from "../context";

const Resume = () => {
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
              <a
                href="https://reden-portfolio.s3.ap-southeast-2.amazonaws.com/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button>DOWNLOAD</button>
              </a>
              <button onClick={toggleValue}>CLOSE</button>
            </>
          )}
        </ResumeViewContextConsumer>
      </div>
      <div>
        <Document
          file="https://reden-portfolio.s3.ap-southeast-2.amazonaws.com/resume.pdf"
          loading
        >
          <Page renderTextLayer={false} pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};
export default Resume;
