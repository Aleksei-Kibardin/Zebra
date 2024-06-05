const apiUrl = "https://flems.github.io/test/api/news/";
let currentPage = 1;
let requestResolution = true;

const requestNews = async (url) => {
  let json;
  try {
    const response = await fetch(url + currentPage + "/");
    json = await response.json();
  } catch {
    console.error("Failed");
  }
  return json.items;
};

const checkNextPage = async (url) => {
  const nextPage = currentPage + 1;
  const response = await fetch(url + nextPage + "/", { method: "HEAD" })
  return response.ok
};

export const getNews = async (storage, status) => {
  if (requestResolution === true) {
    status.value = await checkNextPage(apiUrl);
    const newsData = await requestNews(apiUrl);
    storage.push(...newsData);
    currentPage++;
  } else {
    console.log('страницы кончились')
  }
};