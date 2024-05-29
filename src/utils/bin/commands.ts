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
  return `Access denied: Nice try! Please forgive me.`;
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

export const date = async (): Promise<string> => {
  return new Date().toString();
};

// Info
export const info = async (args: string[]): Promise<string> => {
  if (args.length == 0)
    return `To use 'info', please provide a command, example: 'info loker'`;

  const command = args[0].toLowerCase();
  switch (command) {
    case "help":
      return "help -- show all available commands.";
    case "about":
      return "about -- show information about me.";
    case "repo":
      return "repo -- open my github repository.";
    case "resume":
      return "resume -- open my resume.";
    case "email":
      return "email -- open my email.";
    case "github":
      return "github -- open my github.";
    case "linkedin":
      return "linkedin -- open my linkedin.";
    case "clear":
      return "clear -- clear the terminal.";
    case "exit":
      return "exit -- exit the terminal.";
    case "donate":
      return "donate -- to support me by buying me a coffee, thanks!";
    case "google":
      return "google -- search google.";
    case "duckduckgo":
      return "duckduckgo -- search duckduckgo.";
    case "bing":
      return "bing -- search bing.";
    case "reddit":
      return "reddit -- search reddit.";
    case "echo":
      return "echo -- masuk pak echo.";
    case "sudo":
      return "sudo -- please dont try this.";
    case "ls":
      return "ls -- simple list.";
    case "whoami":
      return "whoami -- show who you are.";
    case "cd":
      return "cd -- change directory.";
    case "date":
      return "date -- show the current date and time.";
    case "btc":
      return "btc -- get btc price.";
    case "eth":
      return "eth -- get eth price.";
    case "projects":
      return "projects -- get projects.";
    case "readme":
      return "readme -- get readme.";
    case "quote":
      return "quote -- get quote.";
    case "loker":
      return `<img src="https://static.vecteezy.com/system/resources/previews/010/258/755/original/lockers-3d-illustration-png.png" alt="loker" loading="lazy" class="object-cover object-center w-48 select-none"/>`;
    case "info":
      return `<img src="https://media1.tenor.com/m/kfc5GCtMIaEAAAAC/whaaaaat-what-do-you-mean.gif" alt="info" loading="lazy" class="object-cover object-center w-48 select-none rounded-full"/>`;
    default:
      return `info ${args[0]} -- command not found.`;
  }
};
