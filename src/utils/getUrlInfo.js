function getUrlInfo(fullUrl) {
  if (!fullUrl) return null;
  const [url, queryString] = fullUrl.split('?');
  const splited = queryString.replace('?', '').split(/[&=]/);
  const params = {};
  for (let i = 0; i < splited.length; i += 1) {
    const key = splited[i];
    const value = splited[i + 1];
    params[key] = value;
    i += 1;
  }

  return { url, params };
}

export default getUrlInfo;
