import * as bin from "./bin";

export const shell = async (
  command,
  setHistory,
  clearHistory,
  setCommand,
  setTerminalOpen
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
