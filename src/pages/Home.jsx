import TopAppBar from "../components/TopAppBar";
import profilePic from "../assets/images/profile-pic.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <TopAppBar />
      <div className="flex pt-48 items-center justify-center pb-32 mt-16">
        <motion.img
          src={profilePic}
          alt="Profile photo of Mollie Jordan"
          className="w-80 h-80 rounded-full mr-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="w-[561px] pl-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-jetbrains text-left tracking-wide">
            Hi, I'm Mollie Jordan!
          </h1>
          <p className="text-small pt-[30px] text-left leading-6">
            I am an aspiring software engineer graduating in 2025 from North
            Carolina State University. I'm passionate about user-centered
            design, collaboration, and using technology to solve the world's
            tougest problems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
