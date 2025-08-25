import Image from "next/image";
import { ReactElement } from "react";
import CTAButton from "@/app/components/Buttons/call_to_action";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  bgColor?: string;
  icon: string | ReactElement;
};

const ProjectCard = ({
  title,
  description,
  image,
  link,
  bgColor = "bg-gray-100",
  icon,
}: ProjectCardProps) => {
  return (
    <div
      className={`card shadow-lg hover:shadow-2xl transition-shadow duration-300 ${bgColor} rounded-lg relative h-full`}
    >
      <figure className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="100%"
          className="rounded-t-lg"
        />
      </figure>

      <div className="card-body p-4">
        <h4 className="card-title text-xl font-bold">{title}</h4>
        <p className="text-gray-600 text-lg">{description}</p>

        <div className="card-actions justify-end mt-4">
          <CTAButton text="View Project" link={link} openInNewTab />
        </div>
      </div>

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

export default ProjectCard;
