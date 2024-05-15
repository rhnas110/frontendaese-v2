import TSIcon from "../assets/icons/TSIcon.png";
import JSIcon from "../assets/icons/JSIcon.png";

const CSSIcon = "https://img.icons8.com/fluency/48/css3.png";
const JSONIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/file_type_json.svg";
const MDIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/file_type_markdown.svg";

// Add file icons here
const fileIcons: { [key: string]: string } = {
  ts: TSIcon,
  js: JSIcon,
  css: CSSIcon,
  json: JSONIcon,
  md: MDIcon,
};

export const getFileIcon = (filename: string): string => {
  const extension = filename.split(".").pop();
  return extension && fileIcons[extension] ? fileIcons[extension] : "";
};
