import TopAppBar from "../components/TopAppBar";
import { useNavigate } from "react-router-dom";

const Research = () => {
  return (
    <div>
      <TopAppBar />
      <div className="flex flex-col pb-10">
        <p className="pt-36">
          This page isn't done yet, but in the meantime, check out my research
          publications below!
        </p>

        <div className="mb-10 ml-10 mr-10">
          <h1 className="text-4xl font-jetbrains text-left tracking-wide mt-12 mb-6">
            Publications
          </h1>
          <button
            className="bg-white hover:bg-gray-100 w-full" onClick={() => window.open("https://dl.acm.org/doi/10.1145/3626252.3630897")}
          >
            <p className="font-jetbrains text-small text-left leading-6">
              1. <strong>Jordan, M.,</strong> Ly, K., & Soosai Raj, A. G. (2024,
              March). Need a Programming Exercise Generated in Your Native
              Language? ChatGPT's Got Your Back: Automatic Generation of
              Non-English Programming Exercises Using OpenAI GPT-3.5. In
              Proceedings of the 55th ACM Technical Symposium on Computer
              Science Education V. 1 (pp. 618-624).
            </p>
          </button>

          <div className="mt-6">
          <button
            className="bg-white hover:bg-gray-100 w-full" onClick={() => window.open("https://dl.acm.org/doi/10.1145/3649217.3653600")}
          >
            <p className="font-jetbrains text-small text-left leading-6">
              2. Villegas Molina, I., Montalvo, A., Zhong, S.,{" "}
              <strong>Jordan, M.,</strong> & Soosai Raj, A. G. (2024).
              Generation and Evaluation of a Culturally-Relevant CS1 Textbook
              for Latines using Large Language Models. In Proceedings of the
              2024 on Innovation and Technology in Computer Science Education V.
              1 (pp. 325-331).
            </p>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
