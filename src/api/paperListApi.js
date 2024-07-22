const BASE_URL = 'https://rolling-api.vercel.app/8-5/recipients/';

export default async function getRecipients(params) {
  try {
    const query = params.replace(BASE_URL, '');
    const response = await fetch(BASE_URL + query);
    const body = await response.json();

    return body;
  } catch (error) {
    return `Failed to fetch products:${error}`;
  }
}
