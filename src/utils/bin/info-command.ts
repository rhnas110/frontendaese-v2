import { listCommands } from "./utils";

export const info = async (args: string[]): Promise<string> => {
  if (args.length == 0)
    return `To use 'info', please provide a command, example: 'info loker'`;

  const command = args[0].toLowerCase();
  const { list } = listCommands(["clear", "exit", "loker", "waifu"]);

  switch (command) {
    case "list":
      return `Available commands for 'info':\n\n${list}`;
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
      return `<img src="https://static.vecteezy.com/system/resources/previews/010/258/755/original/lockers-3d-illustration-png.png" alt="loker" loading="lazy" class="object-cover object-center w-48 select-none cursor-default"/>`;
    case "info":
      return `<img src="https://media1.tenor.com/m/kfc5GCtMIaEAAAAC/whaaaaat-what-do-you-mean.gif" alt="info" loading="lazy" class="object-cover object-center w-48 select-none rounded-full cursor-default"/>`;
    case "waifu":
      return `<img src="https://media1.tenor.com/m/GBdIH5sL4XQAAAAC/the-rock-rock.gif" alt="waifu" loading="lazy" class="object-cover object-center w-48 select-none rounded-full saturate-0 hover:saturate-100 transition duration-300 cursor-default"/>`;
    default:
      return `info ${args[0]} -- command not found. Type 'info list' to see all available commands.`;
  }
};
