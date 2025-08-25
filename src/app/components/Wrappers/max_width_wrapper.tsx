import { JSX, ReactNode } from "react";

type MaxWidthWrapperProps = {
  bgColor?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({
  bgColor = "bg-white",
  children,
}: MaxWidthWrapperProps): JSX.Element => {
  return (
    <section className={`p-8 sm:p-20 ${bgColor}`}>
      <div className="max-w-5xl xl:max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default MaxWidthWrapper;
