import * as bin from "./bin";

export const shell = async (
  command,
  setHistory,
  clearHistory,
  setCommand,
  setTerminalOpen,
  addTab
) => {
  const args = command.split(" ");
  args[0] = args[0].toLowerCase();

  if (args[0] === "clear" || args[0] === "cls") {
    clearHistory();
  } else if (args[0] === "exit") {
    setHistory("exiting terminal...");
    setTimeout(async () => {
      clearHistory();
      setTerminalOpen(false);
    }, 1000);
  } else if (args[0] === "cd") {
    const file = args[1]?.toLowerCase();

    if (!file) {
      setHistory("please provide a file or directory, example: 'cd home'");
      setCommand("");
      return;
    }
    switch (file) {
      case "home":
        setHistory("Open Home");
        addTab({ id: "home", title: "Home.ts" });
        break;
      case "about":
        setHistory("Open About");
        addTab({ id: "about", title: "About.ts" });
        break;
      case "resume":
        setHistory("Open Resume");
        addTab({ id: "resume", title: "Resume.ts" });
        break;
      case "contact":
        setHistory("Open Contact");
        addTab({ id: "contact", title: "Contact.ts" });
        break;
      default:
        setHistory(`cd: ${file}: no such file or directory`);
        break;
    }
  } else if (command === "") {
    setHistory("");
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(`${args[0]}: command not found. Try 'help' to get started.`);
  } else {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  }
  setCommand("");
};
