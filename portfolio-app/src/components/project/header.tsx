import { Link } from "react-router-dom";
import { useMediaQuery } from "../shared/use-media-query";

const Header = () => {
  const isNotMedium = useMediaQuery("(min-width: 981px)");

  return (
    <header
      style={{
        height: 60,
        width: "100%",
        position: "fixed",
        borderBottom: "1px solid rgb(18 21 18)",
        paddingLeft: 20,
        backgroundColor: "#f2f9e7",
        zIndex: 9,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          verticalAlign: "middle",
          alignItems: "center",
        }}
      >
        {/* Hack to align items in the y-axis (vertical) */}
        <div style={{ height: 60 }} />
        <div style={{ display: "flex", flex: 1, fontSize: 28 }}>
          🤖 {isNotMedium ? "Projects" : ""}
        </div>
        <div
          className="link-container"
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-around",
            marginRight: 20,
          }}
        >
          <Link to="/">
            <button style={{ width: 120, height: 55 }}>HOME</button>
          </Link>
          <a href="#frontend">
            <button style={{ width: 140, height: 55 }}>FRONTEND</button>
          </a>
          <a href="#backend">
            <button style={{ width: 120, height: 55 }}>BACKEND</button>
          </a>
          <a href="#mobile">
            <button style={{ width: 120, height: 55 }}>MOBILE</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
