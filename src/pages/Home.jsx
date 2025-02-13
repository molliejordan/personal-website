import TopAppBar from "../components/TopAppBar";
import profilePic from "../assets/images/profile-pic.jpg";

const Home = () => {
  return (
    <div>
      <TopAppBar />
      <div className="flex pt-[208px] items-center justify-center pb-20 mt-16" >
        <img
          src={profilePic}
          alt="Profile photo of Mollie Jordan"
          className="w-80 h-80 rounded-full mr-5"
        />
        <div className="w-[561px] pl-20">
          <h1 className="text-4xl font-inter text-left tracking-wide">
            Hello! My name is Mollie Jordan and I am a senior Computer Science
            student graduating in May 2025.
          </h1>
          <p className="text-small pt-[30px] text-left leading-6">
            This website is a work in progress and a personal project made using
            React with Tailwind CSS. Keep checking back for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
