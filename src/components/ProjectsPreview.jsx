import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex w-full justify-evenly mt-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          imageSrc={project.imageSrc}
          title={project.title}
          date={project.date}
          description={project.description}
          onClick={project.path ? () => handleClick(project.path) : null}
        />
      ))}
    </div>
  );
};

export default ProjectsPreview;
