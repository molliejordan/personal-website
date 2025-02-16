import TopAppBar from "../components/TopAppBar";
import CuratorsCompassButton from "../components/CuratorsCompassButton/CuratorsCompassButton";
import ProjectsPreview from "../components/ProjectsPreview";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="w-full flex-grow">
          <div className="w-full flex pt-48 items-center justify-center pb-32">
            {/* <div className=" bg-blue-100 rounded-xl h-36 overflow-hidden">
              <CuratorsCompassButton />
            </div> */}
            <div className="w-4/5">
              <h1 className="text-6xl font-jetbrains text-left tracking-wide">
                Projects
              </h1>
              <p className="text-small pt-[30px] text-left leading-6">
                Here are some of the projects I have worked on. I am currently adding my projects to this page, so check back soon for more information!
              </p>
              <ProjectsPreview />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
