import TopAppBar from "../components/TopAppBar";
import ResearchCard from "../components/ResearchCard";
import researchItems from "../data/research.json";

const Research = () => {
  return (
    <div>
      <TopAppBar />
      <div className="flex flex-col pb-10">
        <p className="pt-36">
          This page is in progress, but in the meantime, check out my research
          publications below!
        </p>

        <div className="mb-10 ml-10 mr-10">
          <h1 className="text-4xl font-jetbrains text-left tracking-wide mt-12 mb-6">
            Publications
          </h1>
          {researchItems.map((item, index) => (
            <div key={item.id} className={index === 0 ? "" : "mt-6"}>
              <ResearchCard text={item.text} link={item.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
