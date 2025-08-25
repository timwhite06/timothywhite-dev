import { JSX } from "react";

export default function Loading(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="loader"></div>
    </div>
  );
}
