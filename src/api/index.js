import axios from 'axios';

const BASE_URL = `https://rolling-api.vercel.app/8-5`;

async function getRecipientById(id) {
  try {
    const result = await axios.get(`${BASE_URL}/recipients/${id}/`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 getRecipientById입니다.');
  }
}

export default getRecipientById;
