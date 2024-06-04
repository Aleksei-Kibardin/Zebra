const apiUrl = "http://flems.github.io/test/api/news/";
let currentPage = 1;
let requestResolution = true;

const requestNews = async (url) => {
  const response = await fetch(url + currentPage + "/");
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  const json = await response.json();

  return json;
};

const checkNextPage = async (url) => {
  const nextPage = currentPage + 1;
  const response = await fetch(apiUrl + nextPage + "/", { method: "head" });

  if (!response.ok) {
    requestResolution = false;
    throw new Error("Network response was not ok " + response.statusText);
  }
};

const getNews = (storage) => {
  if (requestResolution === true) {
    storage = requestNews(apiUrl);
    checkNextPage(apiUrl);
    currentPage++;
    return true
  } else {
    return false
  }
};

getNews(apiUrl);
