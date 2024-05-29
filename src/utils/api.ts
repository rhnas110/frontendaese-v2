import axios from "axios";
import config from "../constants/data.json";

export const getProjects = async () => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${config.social.github}/repos`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getReadme = async () => {
  try {
    const { data } = await axios.get(config.readmeUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuote = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    return {
      quote: `“${data.content}” — ${data.author}`,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCryptoPrice = async ({
  coins = "BTC",
  currency = "USD,IDR",
}: {
  coins?: string;
  currency?: string;
}) => {
  try {
    const { data } = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${coins}&tsyms=${currency}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
