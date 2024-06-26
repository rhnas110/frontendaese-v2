import * as bin from ".";

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const commands = ["clear", "cls", "exit", "cd", ...Object.keys(bin)].filter(
    (entry) => entry.startsWith(command)
  );

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
