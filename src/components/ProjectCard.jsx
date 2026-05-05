import PropTypes from 'prop-types';

const ProjectCard = ({ imageSrc, title, date, description, onClick }) => {
  const content = (
    <>
      <div className="bg-gray-300 rounded-xl h-48 overflow-hidden">
        <img
          className="rounded-xl"
          src={imageSrc}
          alt="Project background"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <h2 className="text-2xl text-left pt-2 font-jetbrains">{title}</h2>
        {date && <h3 className="text-base text-left font-jetbrains">{date}</h3>}
        {description && <p className="text-xs pt-2 text-left">{description}</p>}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        className="flex flex-col w-full mr-4 bg-white hover:bg-gray-100 pt-4"
        onClick={onClick}
      >
        {content}
      </button>
    );
  } else {
    return (
      <div className="w-full mr-4 pt-4">
        {content}
      </div>
    );
  }
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default ProjectCard;