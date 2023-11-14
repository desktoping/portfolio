import { useState } from "react";
import Card from "./card";
import "./css/container.css";
import Content from "./content";
import Centered from "./shared/centered";
import Resume from "./shared/pdf";
import {
  ResumeViewContextConsumer,
  ResumeViewContextProvider,
} from "./context";
import ReactDOM from "react-dom";
import { useMediaQuery } from "./shared/use-media-query";

/**
 * main page container
 * Inline styling is for the purpose of demonstration
 * @returns
 */

const Container = () => {
  const [showResume, setShowResume] = useState(false);
  const toggleResume = () => setShowResume(!showResume);
  const isMedium = useMediaQuery("(max-width: 1199px)");

  return (
    <ResumeViewContextProvider
      value={{ show: showResume, toggleValue: toggleResume }}
    >
      <ResumeViewContextConsumer>
        {({ show }) => show && ReactDOM.createPortal(<Resume />, document.body)}
      </ResumeViewContextConsumer>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          flexDirection: isMedium ? "column" : "row",
        }}
      >
        <div className="side-bg">
          <Centered>
            {/* Need to initialize width for the child position */}
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Card />
            </div>
          </Centered>
        </div>
        <div style={{ display: "flex", flex: 2 }}>
          <Centered>
            <Content />
          </Centered>
        </div>
      </div>
    </ResumeViewContextProvider>
  );
};

export default Container;
