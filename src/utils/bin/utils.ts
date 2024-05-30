import * as bin from ".";
export const listCommands = (commands?: string[]) => {
  const list = ["cd", ...Object.keys(bin), ...(commands || [])]
    .filter((command) => command !== "started")
    .sort();
  function renderList() {
    let c = "";
    for (let i = 1; i <= list.length; i++) {
      if (i % 7 === 0) {
        c += list[i - 1] + "\n";
      } else {
        c += list[i - 1] + " ";
      }
    }
    return c;
  }

  return {
    commands,
    list: renderList(),
  };
};
