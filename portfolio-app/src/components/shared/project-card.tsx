import "./project-card.css";

interface IProps {
  onClick: () => void;
  ImageComponent: React.ReactNode | JSX.Element;
  title: string;
}

const ProjectCard = ({ onClick, ImageComponent, title }: IProps) => {
  return (
    <div
      onClick={onClick}
      className="project-card"
      style={{
        height: 200,
        width: 200,
        margin: 20,
        overflow: "hidden",
      }}
    >
      <h3>{title}</h3>
      {ImageComponent}
    </div>
  );
};

export default ProjectCard;
