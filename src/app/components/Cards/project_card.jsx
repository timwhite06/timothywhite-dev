import PropTypes from "prop-types";
import Image from "next/image";
import CTAButton from "@/app/components/Buttons/call_to_action";

const ProjectCard = ({ title, description, image, link, bgColor, icon }) => {
  return (
    <div
      className={`card shadow-lg hover:shadow-2xl transition-shadow duration-300 ${bgColor} rounded-lg relative h-full`}
    >
      {/* Project Image */}
      <figure className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill // Use fill without layout
          style={{ objectFit: "cover" }} // Update objectFit to be inline style
          sizes="100%"
          className="rounded-t-lg"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h4 className="card-title text-xl font-bold">{title}</h4>
        {/* Description */}
        <p className="text-gray-600 text-lg">{description}</p>

        {/* Call to Action Button */}
        <div className="card-actions justify-end mt-4">
          {/* Use CTAButton component here */}
          <CTAButton text="View Project" link={link} openInNewTab />
        </div>
      </div>

      {/* Icon in Bottom-Left Corner */}
      <div className="absolute bottom-4 left-4">
        {typeof icon === "object" ? (
          <div className="h-10 w-10">{icon}</div>
        ) : (
          <i className={`${icon} text-4xl text-black`}></i>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

ProjectCard.defaultProps = {
  bgColor: "bg-gray-100", // Default background color
};

export default ProjectCard;
