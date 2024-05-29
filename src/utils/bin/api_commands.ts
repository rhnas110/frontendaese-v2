// List of commands that require API calls

import { getProjects, getQuote, getReadme, getCryptoPrice } from "../api";
import { rupiah } from "../currency";

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
I'm a full stuck developer.`;
  return `Opening GitHub README...${customReadme}`;
};

export const quote = async (): Promise<string> => {
  const data = await getQuote();
  if (!data) return "Failed to fetch quote";
  return data.quote;
};

export const btc = async (): Promise<string> => {
  const data = await getCryptoPrice({});
  if (!data) return "Failed to fetch BTC price";
  return `Get BTC price...\n
$${data.USD}
${rupiah(data.IDR)}
  
Disclaimer: This data was produced from min-api.cryptocompare.com Bitcoin Price Index.
`;
};
export const eth = async (): Promise<string> => {
  const data = await getCryptoPrice({ coins: "ETH" });
  if (!data) return "Failed to fetch ETH price";
  return `Get ETH price...\n
$${data.USD}
${rupiah(data.IDR)}
  
Disclaimer: This data was produced from min-api.cryptocompare.com Ethereum Price Index.
`;
};
