// List of commands that require API calls

import { getProjects } from "../api";
import { getQuote } from "../api";
import { getReadme } from "../api";

export const projects = async (): Promise<string> => {
  const projects: [{ name: string; html_url: string }] = await getProjects();
  if (!projects) return "Failed to fetch projects";
  const list = projects
    ?.map(
      (repo) =>
        `${repo.name} - <a class="underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`
    )
    ?.join("\n");
  return `Fetching projects...\n${list}`;
};

export const readme = async (): Promise<string> => {
  const readme = await getReadme();
  if (!readme) return "Failed to fetch readme";
  const customReadme = `\n\nHi there, I am As 👋 
I'm a full stuck developer. Who loves to work with ultramodern technologies. My goal is to give value to the large community of developers.`;
  return `Opening GitHub README...${customReadme}`;
};

export const quote = async (): Promise<string> => {
  const data = await getQuote();
  if (!data) return "Failed to fetch quote";
  return data.quote;
};
