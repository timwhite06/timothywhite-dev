import Link from "next/link";
import { SkillCardProps } from "@/app/types/home_page";

function getYearsOfExperience(startYear: number, endYear?: number): number {
  const currentYear = new Date().getFullYear();
  if (endYear !== undefined && endYear !== null) {
    return endYear - startYear;
  }
  return currentYear - startYear;
}

const SkillCard = ({
  title,
  icon,
  experienceStartYear,
  experienceEndYear,
  children,
  link,
}: SkillCardProps) => {
  const isSvg = typeof icon === "object";

  const isYearValid =
    experienceStartYear !== null && experienceStartYear !== undefined;
  const yearsOfExperience = isYearValid
    ? getYearsOfExperience(experienceStartYear, experienceEndYear)
    : null;

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="card card-compact bg-gray-100 w-full min-h-[250px] sm:min-h-[350px] transition-transform transform hover:scale-105 hover:shadow-[0_4px_14px_rgba(34,211,238,0.4)]">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h4 className="card-title text-2xl">{title}</h4>
            {yearsOfExperience !== null && (
              <div
                className="badge text-lg p-3 mt-[-5px] border-none text-black"
                style={{ background: "#22d3ee" }}
              >
                {yearsOfExperience}+ years
              </div>
            )}
          </div>

          <p className="text-lg">{children}</p>
          {isSvg ? (
            <div className="h-12 w-12 flex justify-center items-center text-5xl">
              {icon}
            </div>
          ) : (
            <i className={`${icon} text-5xl`}></i>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
