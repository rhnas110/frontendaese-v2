import JSIcon from "../assets/icons/js.png";
import TSIcon from "../assets/icons/ts.png";

const TSXIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/file_type_reactts.svg";
const JSXIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/file_type_reactjs.svg";
const CSSIcon = "https://img.icons8.com/fluency/48/css3.png";
const JSONIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/file_type_json.svg";
const MDIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/file_type_markdown.svg";
const DefaultIcon =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/default_file.svg";

// Add file icons here
const fileIcons: { [key: string]: string } = {
  ts: TSIcon,
  tsx: TSXIcon,
  js: JSIcon,
  jsx: JSXIcon,
  css: CSSIcon,
  json: JSONIcon,
  md: MDIcon,
};

// Default icon for tabs without a file extension or unknown file types
const defaultFileIcons: { [key: string]: string } = {
  ["Update Log"]:
    "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/default_file.svg",
  ["MOKOMDO"]: "https://abangkuh.netlify.app/assets/mokomdo.png",
  ["impact."]: "https://im-pact.netlify.app/favicon.ico",
};

export const getFileIcon = (filename: string): string => {
  const extension = filename.split(".").pop();
  if (extension && fileIcons[extension]) {
    return fileIcons[extension];
  }
  return defaultFileIcons[filename] || DefaultIcon;
};
