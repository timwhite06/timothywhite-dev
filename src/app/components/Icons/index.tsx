import { FC } from "react";

const NextJsIcon: FC = () => {
  return (
    <svg
      data-testid="geist-icon"
      height="100%"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="100%"
      style={{ color: "currentcolor" }}
    >
      <g clipPath="url(#clip0_53_108)">
        <circle
          cx="8"
          cy="8"
          r="7.375"
          fill="black"
          stroke="var(--ds-gray-1000)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <path
          d="M10.63 11V5"
          stroke="url(#paint0_linear_53_108zmr60w8o6)"
          strokeWidth="1.25"
          strokeMiterlimit="1.41421"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
          fill="url(#paint1_linear_53_108zmr60w8o6)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_53_108zmr60w8o6"
          x1="11.13"
          y1="5"
          x2="11.13"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="0.609375" stopColor="white" stopOpacity="0.57"></stop>
          <stop offset="0.796875" stopColor="white" stopOpacity="0"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_53_108zmr60w8o6"
          x1="9.9375"
          y1="9.0625"
          x2="13.5574"
          y2="13.3992"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_53_108">
          <rect width="16" height="16" fill="red"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

const MongodbIcon: FC = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    height="100%"
    width="100%"
  >
    <path
      fill="black"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934c-3.244-10.104-8.45-19.046-15.783-26.74c-1.854-1.946-3.916-3.729-5.209-6.151c-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501c-.065 2.517-1.491 4.224-3.267 5.817c-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617l-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688c-.16 2.251.022 4.535.149 6.798c.181 3.235.743 6.415 1.586 9.545c3.062 11.372 9.276 20.805 17.771 28.819c1.579 1.489 3.199 2.843 4.847 4.26c.282-.965.507-1.93.763-2.895c.256-.961.515-1.917.688-2.881c-.174.964-.369 1.92-.562 2.881l-.826 2.895l.738 2.501l.684 3.884l.326 4.053c-.003.823-.036 1.648.014 2.47c.012.21.288.404.442.606l1.376.483l1.434.558l-.246-3.603l-.011-3.548l.495-5.405l.359-1.177l1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081c2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 0 0 6.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001c.77-2.104 1.247-4.315 1.854-6.479c.054-.156.126-.309.16-.468c1.254-5.841 1.465-11.741 1.004-17.682m-23.599 49.375l-.805-1.763zl1.183 1.01z"
    />
  </svg>
);

const ThreeJsIcon: FC = () => {
  return (
    <svg
      fill="none"
      height="100%"
      width="100%"
      strokeLinecap="square"
      strokeMiterlimit="10"
      version="1.1"
      viewBox="0 0 226.77 226.77"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="translate(8.964 4.2527)"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
      </g>
    </svg>
  );
};

export { NextJsIcon, MongodbIcon, ThreeJsIcon };
