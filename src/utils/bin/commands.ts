// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../constants/data.json";

// Initial when opening the terminal
export const started = (): string => {
  return `Welcome to my simple portfolio website.

Type 'help' to see the list of available commands.
Type 'repo' or click <a class="underline" href="${config.repo}" target="_blank">here</a> for the Github repository.
`;
};

// Help
export const help = async (): Promise<string> => {
  const commands = Object.keys(bin)
    .filter((command) => command !== "started")
    .sort();
  let c = "";
  for (let i = 1; i <= commands.length; i++) {
    if (i % 7 === 0) {
      c += commands[i - 1] + "\n";
    } else {
      c += commands[i - 1] + " ";
    }
  }
  return `Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
[exit]: exit terminal.\n
Type 'about' to learn more about me.
Please dont type 'sudo' you will regret it.
`;
};

// About
export const about = async (): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my simple portfolio website, and enjoy the exploration!\n
More about me:
'linkedin' - visit my linkedin profile.
'resume' - view my latest resume.`;
};

// Donate
export const donate = async (): Promise<string> => {
  return `Thank you for your interest and support. 
Here are some ways you can support me and buy me a coffee:
- <a class="underline" href="${config.donate_urls.saweria}" target="_blank">Saweria</a>
- <a class="underline" href="${config.donate_urls.paypal}" target="_blank">PayPal</a>
`;
};

// Redirection
export const repo = async (): Promise<string> => {
  window.open(`${config.repo}`);
  return "Opening Github repository...";
};
export const resume = async (): Promise<string> => {
  window.open(`${config.resume_url}`);
  return "Opening resume...";
};
// Contact
export const email = async (): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};
export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return "Opening github...";
};
export const linkedin = async (): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return "Opening linkedin...";
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(" ")}`);
  return `Searching google for ${args.join(" ")}...`;
};
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(" ")}`);
  return `Searching duckduckgo for ${args.join(" ")}...`;
};
export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(" ")}`);
  return `Searching bing for ${args.join(
    " "
  )}... Really? You are actually using Bing?`;
};
export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(" ")}`);
  return `Searching reddit for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};

export const sudo = async (): Promise<string> => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  return `Access denied: Nice try!`;
};

export const ls = async (): Promise<string> => {
  return `aku
suka
php
tapi
lebih
suka
javascript
karena
aku
anak
buah
bang theo`;
};

export const whoami = async (): Promise<string> => {
  return `Aku siapa? Who am I?`;
};

export const cd = async (): Promise<string> => {
  return `Unfortunately, this feature is still unfinished.
If you want to help, you can type 'donate'.`;
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};
