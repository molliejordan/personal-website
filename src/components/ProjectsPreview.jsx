import { useNavigate } from "react-router-dom";

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex w-full justify-evenly mt-4">
      <button
        className="flex flex-col w-full mr-4 bg-white hover:bg-gray-100 pt-4"
        onClick={() => handleClick("/projects/curators-compass")}
      >
        <div className="bg-gray-300 rounded-xl h-48 overflow-hidden">
          <img
            className="rounded-xl"
            src="/personal-website/curators-compass-background.png"
            alt="Mesh gradient background"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <h2 className="text-2xl text-left pt-2 font-jetbrains">
            Curator's Compass
          </h2>
          <h3 className="text-base text-left font-jetbrains">January 2025</h3>
          <p className="text-xs pt-2 text-left">
            Currently working on a data product catalog and data asset
            suggestion algorithm to enhance data discoverability and governance.
          </p>
        </div>
      </button>
      <div className="w-full mr-4 pt-4">
        <div className="bg-gray-300 rounded-xl h-48 overflow-hidden">
          <img
            className="rounded-xl"
            src="/personal-website/coming-soon-gradient.png"
            alt="Mesh gradient background"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <h2 className="text-2xl text-left pt-2 font-jetbrains">
            OpenAPI Generator: Coming soon!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
