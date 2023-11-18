import { useState } from "react";
import ProjectCard from "../../shared/project-card";
import Portfolio from "../../images/portfolio.png";
import Wireframe from "../../images/wireframe.png";
import ChromeExtension from "../../images/chrome-extension.png";

const FrontendProjectContainer = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <ProjectCard
          title="Portfolio"
          ImageComponent={
            <img width={200} src={Portfolio} alt="portfolio project" />
          }
          onClick={() => setSelected(0)}
        />
        <ProjectCard
          title="Wireframe"
          ImageComponent={
            <img width={200} src={Wireframe} alt="portfolio project" />
          }
          onClick={() => setSelected(1)}
        />
        <ProjectCard
          title="Chrome extension"
          ImageComponent={
            <img width={200} src={ChromeExtension} alt="portfolio project" />
          }
          onClick={() => setSelected(2)}
        />
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        {selected === 0 && (
          <div>
            <p>
              Portfolio project is created through create react app template.
              Does not use third-party packages to enhance UI/UX, this is done
              deliberately to showcase basic HTML, CSS and JS knowledge.
            </p>
            <p>
              Though some functionality does require third-party tools for
              simplicity like
              <ul>
                <li>
                  viewing PDF capability provided by{" "}
                  <a
                    href="https://github.com/wojtekmaj/react-pdf/blob/main/packages/react-pdf/README.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    react-pdf
                  </a>
                </li>
                <li>
                  routing capability to view projects provided by{" "}
                  <a
                    href="https://reactrouter.com/en/main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    react-router-dom
                  </a>
                </li>
              </ul>
            </p>
            <br />
            <br />
            <p>
              <a
                href="https://github.com/desktoping/portfolio/tree/main/portfolio-app"
                target="_blank"
                rel="noreferrer"
              >
                <button style={{ width: 300, height: 50 }} className="primary">
                  View project code
                </button>
              </a>
            </p>
          </div>
        )}
        {selected === 1 && (
          <div>
            <p>
              Wireframe project to demonstrate ability to convert a
              wireframe/design into component.
            </p>
            <br />
            <br />
            <p>
              <a
                href="https://github.com/desktoping/portfolio/tree/main/wireframe-app"
                target="_blank"
                rel="noreferrer"
              >
                <button style={{ width: 300, height: 50 }} className="primary">
                  View project code
                </button>
              </a>
            </p>
          </div>
        )}
        {selected === 2 && (
          <div>
            <p>Chrome extension development for personal use.</p>
            <br />
            <br />
            <p>
              <a
                href="https://github.com/desktoping/portfolio/tree/main/chrome-ext"
                target="_blank"
                rel="noreferrer"
              >
                <button style={{ width: 300, height: 50 }} className="primary">
                  View project code
                </button>
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrontendProjectContainer;
