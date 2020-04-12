const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const getData = (url) => {
  return fetch(proxyUrl + url);
};
