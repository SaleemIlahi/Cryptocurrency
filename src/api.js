const options = {
  headers: {
    "x-access-token": process.env.REACT_APP_CRYPTO_API_KEY,
  },
};

const api = async (limit) => {
  let data = await fetch(
    "https://api.coinranking.com/v2/coins?limit=" + limit,
    options
  );
  let response = await data.json();
  return response;
};

const searchCoinApi = async (value) => {
  let data = await fetch(
    "https://api.coinranking.com/v2/coins?search=" + value,
    options
  );
  let response = await data.json();
  return response;
};

export { api, searchCoinApi };
