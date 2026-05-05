import PropTypes from "prop-types";

const ResearchCard = ({ text, link }) => {
  const openLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="bg-white hover:bg-gray-100 w-full text-left"
      onClick={openLink}
    >
      <p className="font-jetbrains text-small text-left leading-6">{text}</p>
    </button>
  );
};

ResearchCard.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ResearchCard;
