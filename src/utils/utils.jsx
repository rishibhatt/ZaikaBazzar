export const fetchApi = async () => {
  const Api = "https://zaikabazzarapi.onrender.com/homepage";
  const response = await fetch(Api);
  const data = await response.json();
  return data;
};
