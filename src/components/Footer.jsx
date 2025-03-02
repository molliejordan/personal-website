import LinkedInIcon from "../assets/logos/linkedin.svg";
import GitHubIcon from "../assets/logos/github.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full h-48">
      <div className="w-full flex justify-between items-start pt-6 pl-6 font-jetbrains">
        <div className="flex flex-col items-start">
          <span className="font-bold">Mollie Jordan</span>
          <span>mcjordan@ncsu.edu</span>
          <span>(984)202-1627</span>
          <div className="flex space-x-4 mt-3 ml-1">
            <a
              href="https://www.linkedin.com/in/mollie-jordan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/molliejordan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubIcon} alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-jetbrains text-right pr-8">
            Last Updated: March 1, 2025
          </p>
          <p className="font-jetbrains text-xs pr-8">
            This project was made using React with Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
