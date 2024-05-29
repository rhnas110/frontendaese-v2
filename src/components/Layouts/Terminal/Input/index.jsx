import { useTabContext } from "../../../../context/TabContext";
import useShortcutKey from "../../../../hooks/useShortcutKey";
import { commandExists } from "../../../../utils/commandExists";
import { shell } from "../../../../utils/shell";
import { handleTabCompletion } from "../../../../utils/tabCompletion";

import { Label } from "./Label";

export const Input = ({
  inputRef,
  containerInputRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
  setTerminalOpen,
}) => {
  const { addTab } = useTabContext();

  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["c"],
    action: () => {
      setCommand("");
      setHistory("");
      setLastCommandIndex(0);
    },
  });
  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["l"],
    action: () => clearHistory(),
  });

  const onSubmit = async (event) => {
    const commands = history
      .map(({ command }) => command)
      .filter((command) => command);

    if (event.key === "Tab") {
      event.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();
      setLastCommandIndex(0);
      await shell(
        command,
        setHistory,
        clearHistory,
        setCommand,
        setTerminalOpen,
        addTab
      );
      containerInputRef.current.scrollTo(
        0,
        containerInputRef.current.scrollHeight
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand("");
      }
    }
  };

  const onChange = ({ target: { value } }) => {
    setCommand(value);
  };

  const exit = history[history.length - 1]?.command === "exit";
  if (exit) return null;
  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="input-terminal" className="flex-shrink">
        <Label />
      </label>
      <input
        ref={inputRef}
        name="input-terminal"
        id="input-terminal"
        type="text"
        className={`flex-grow text-gray-400 bg-transparent outline-none caret-gray-400 ${
          commandExists(command) || command === ""
            ? "text-green_vs"
            : "text-red-400"
        }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
