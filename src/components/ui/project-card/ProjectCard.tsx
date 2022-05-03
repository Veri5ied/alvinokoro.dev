import "./style.scss";
import Card from "../../card/Card";
import SpringBlockPic from "../../../assets/images/springblock.png";

interface ProjectsProps {
  id: number;
  imgUrl: string;
  altText: string;
  linkUrl: string;
}

const Projects: ProjectsProps[] = [
  {
    id: 1,
    imgUrl: SpringBlockPic,
    altText: "SpringBlock",
    linkUrl: "https://springblock.io/",
  },
  {
    id: 2,
    imgUrl: SpringBlockPic,
    altText: "SpringBlock",
    linkUrl: "https://springblock.io/",
  },
  {
    id: 3,
    imgUrl: SpringBlockPic,
    altText: "SpringBlock",
    linkUrl: "https://springblock.io/",
  },
];
const ProjectCard = () => {
  return (
    <div className="project_card_container">
      {Projects.map((project) => (
        <Card
          key={project.id}
          linkUrl={project.linkUrl}
          imgUrl={project.imgUrl}
          altText={project.altText}
        />
      ))}
    </div>
  );
};

export default ProjectCard;
