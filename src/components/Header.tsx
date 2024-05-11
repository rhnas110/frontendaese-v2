import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import JSIcon from "../assets/icons/JSIcon.png";
import { Image } from "./Elements/Image";
import { MobileXs } from "../utils/screen";
function Header() {
  const codeString = `const profile = {
    name: "Raihan Arif Styawan",
    age: 20,
    title: "Web Developer",
    hobby: ["Coding", "Gaming", "Anime"],
    isMarried: false,
  };`;
  const [greeting] = useTypewriter({
    words: [
      "<Hello World />",
      "Selamat Datang!", // Indonesia
      "Guten Tag!", // German
      "안녕하세요!", // Korean
      "こんにちは！", // Japanese
      "Bonjour!", // French
      "Hola!", // Spanish
      "مرحبا!", // Arabic
      "Kronnichiwa!",
      "Привет!", // Russian
      "Merhaba!", // Turkish
      "Konnichiwa sekai!",
    ],
    loop: 3,
    typeSpeed: 80,
    deleteSpeed: 100,
  });
  const [code] = useTypewriter({
    words: [codeString],
    loop: 1,
    typeSpeed: 40,
    deleteSpeed: 50,
  });
  return (
    <div className="w-full px-2 pt-60">
      <div className="flex flex-col gap-2">
        <code className="text-lg text-lightblue_vs">
          {greeting}
          <Cursor />
        </code>
        <div className="max-w-sm overflow-hidden rounded-lg shadow-lg">
          <div className="flex items-center gap-1 px-2 py-1 bg-neutral-700">
            <Image
              src={JSIcon}
              alt="JS Icon"
              className="w-5 bg-transparent"
              lazy
            />
            <code>profile.js</code>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={a11yDark}
            customStyle={{
              margin: "0",
              padding: "0.5rem",
              height: MobileXs ? "206px" : "186px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
            }}
            wrapLongLines={MobileXs}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="https://www.linkedin.com/in/raihanas/"
          target="_blank"
          className="px-3 py-2 font-semibold transition duration-300 border rounded border-lightblue_vs text-lightblue_vs hover:bg-lightblue_vs hover:text-background"
        >
          <code>Let's Connect</code>
        </Link>
      </div>
    </div>
  );
}

export default Header;