import axios from "axios";

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
