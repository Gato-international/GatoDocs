const colors = require("tailwindcss/colors");
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

export default {
  darkMode: true,
  googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY,
  project: {
    name: "CornDocs",
    url: "https://www.corndocs.com",
    github: {
      repo: "https://github.com/dishwasher-detergent/CornDocs",
      usesMain: false,
    },
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 12"
        strokeWidth="0.75"
        stroke="#eab308"
      >
        <path d="M18.79 9.952A3.954 3.954 0 0 0 22.742 6a3.954 3.954 0 0 0-3.952-3.952h-7.068A3.954 3.954 0 0 0 7.77 6a3.954 3.954 0 0 0 3.952 3.952h7.068Z" />
        <path d="M8.159 7.711A3.938 3.938 0 0 1 7.77 6c0-.616.141-1.198.393-1.718a6.77 6.77 0 0 1-.328.012c-.305 0-.894-.139-.894-.139-.843 0-1.528.827-1.528 1.845s.685 1.845 1.528 1.845c0 0 .718-.139 1.067-.139.044 0 .095.002.151.005Z" />
        <path d="M5.589 5.141H2.117a.86.86 0 0 0 0 1.718h3.472A2.15 2.15 0 0 1 5.413 6c0-.31.064-.602.176-.859Z" />
      </svg>
    ),
  },
  color: colors.amber,
};
