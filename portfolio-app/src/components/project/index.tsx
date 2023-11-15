import Centered from "../shared/centered";
import FullScreenContainer from "../shared/full-screen";
import FrontendProjectContainer from "./frontend";
import Header from "./header";

const Projects = () => {
  return (
    <FullScreenContainer>
      <Header />
      <div
        id="frontend"
        style={{
          width: "100vw",
          minHeight: "calc(100vh - 60px)",
          position: "relative",
          top: 60,
        }}
      >
        <div style={{ padding: 20 }}>
          <h1>FRONTEND</h1>
          <FrontendProjectContainer />
        </div>
      </div>
      <div
        id="backend"
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          position: "relative",
          top: 60,
        }}
      >
        <div style={{ padding: 20 }}>
          <h1>BACKEND</h1>
          <Centered />
        </div>
      </div>
      <div
        id="mobile"
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          position: "relative",
          top: 60,
        }}
      >
        <div style={{ padding: 20 }}>
          <h1>MOBILE</h1>
          <Centered />
        </div>
      </div>
    </FullScreenContainer>
  );
};

export default Projects;
