import { JSX } from "react";

const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="flex flex-col w-full">
      <footer className="bg-white text-black py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} Timothy White. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-3 pb-2">
            <a
              href="https://github.com/timwhite06"
              className="hover:text-gray-400 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
