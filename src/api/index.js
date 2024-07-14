import axios from 'axios';

const BASE_URL = `https://rolling-api.vercel.app/8-5`;

export async function getRecipientById(id) {
  try {
    const result = await axios.get(`${BASE_URL}/recipients/${id}/`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 getRecipientById입니다.');
  }
}

export async function getMessagesByRecipientId({ recipientId, offset = 0, limit = 6 }) {
  const query = `limit=${limit}&offset=${offset}`;
  console.log(`${BASE_URL}/recipients/${recipientId}/messages/?${query}`);
  try {
    const result = await axios.get(`${BASE_URL}/recipients/${recipientId}/messages/?${query}`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 getMessagesByRecipientId입니다.');
  }
}
