import axios from "axios";

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
