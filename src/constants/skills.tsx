import { Image } from "../components/elements/image";
import JsLogo from "../assets/logos/js.png";
import HTMLLogo from "../assets/logos/html.png";
import CSSLogo from "../assets/logos/css.png";
import ReactLogo from "../assets/logos/react-js.png";
import TailwindLogo from "../assets/logos/tailwind.png";
import NextLogo from "../assets/logos/next-js.png";
import TypescriptLogo from "../assets/logos/ts.png";
import NodeJSLogo from "../assets/logos/node-js.png";
import SQLLogo from "../assets/logos/sql.png";
import RESTAPILogo from "../assets/logos/rest-api.png";
import FramerMotionLogo from "../assets/logos/framer-motion.webp";

export const skills = [
  {
    name: "JavaScript (ES6+)",
    logo: (
      <Image src={JsLogo} alt="JS" className="w-5 h-5 bg-transparent" lazy />
    ),
  },
  {
    name: "HTML",
    logo: (
      <Image
        src={HTMLLogo}
        alt="HTML"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "CSS",
    logo: (
      <Image src={CSSLogo} alt="CSS" className="w-5 h-5 bg-transparent" lazy />
    ),
  },
  {
    name: "React.js",
    logo: (
      <Image
        src={ReactLogo}
        alt="React"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "Tailwind CSS",
    logo: (
      <Image
        src={TailwindLogo}
        alt="Tailwind"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "Next.js",
    logo: (
      <Image
        src={NextLogo}
        alt="Next"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "TypeScript",
    logo: (
      <Image
        src={TypescriptLogo}
        alt="Typescript"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "Nodejs",
    logo: (
      <Image
        src={NodeJSLogo}
        alt="Nodejs"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "Express.js",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <path
          fill="#fff"
          d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
        ></path>
        <path
          fill="#fff"
          d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
        ></path>
      </svg>
    ),
  },
  {
    name: "SQL",
    logo: (
      <Image src={SQLLogo} alt="SQL" className="w-5 h-5 bg-transparent" lazy />
    ),
  },
  {
    name: "Chakra UI",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="20" fill="#4db6ac"></circle>
        <path
          fill="#fff"
          d="M33.357,21.5h-8.882c-0.187,0-0.308-0.198-0.222-0.365l5.03-9.745	c0.13-0.253-0.195-0.492-0.398-0.293l-14.2,13.974c-0.159,0.157-0.048,0.428,0.175,0.428H24.2c0.202,0,0.32,0.227,0.205,0.393	l-7.126,10.265c-0.17,0.245,0.154,0.528,0.374,0.327l15.873-14.55C33.694,21.78,33.585,21.5,33.357,21.5z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <path
          fill="#7c4dff"
          d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
        ></path>
        <path
          fill="#fff"
          d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
        ></path>
      </svg>
    ),
  },
  {
    name: "REST API",
    logo: (
      <Image
        src={RESTAPILogo}
        alt="REST API"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
  {
    name: "Git",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <path
          fill="#F4511E"
          d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    logo: (
      <Image
        src={FramerMotionLogo}
        alt="Framer Motion"
        className="w-5 h-5 bg-transparent"
        lazy
      />
    ),
  },
];
