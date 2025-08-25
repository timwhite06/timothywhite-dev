import Link from "next/link";
import { JSX } from "react";

type CTAButtonProps = {
  text: string;
  link: string;
  openInNewTab?: boolean;
};

const CTAButton = ({
  text,
  link,
  openInNewTab = false,
}: CTAButtonProps): JSX.Element => {
  return (
    <Link
      href={link}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : ""}
    >
      <div className="relative rounded px-4 py-2 overflow-hidden group bg-[#22d3ee] hover:bg-gradient-to-r hover:from-[#22d3ee] hover:to-cyan-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300 text-md">
        <span className="absolute right-0 w-4 h-20 -mt-10 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">{text}</span>
      </div>
    </Link>
  );
};

export default CTAButton;
