async function getUrl(url) {
  try {
    let response = await fetch(url);
    let res = await response.json();
    return res;
  } catch (error) {
    return error;
  }
}

export { getUrl };
