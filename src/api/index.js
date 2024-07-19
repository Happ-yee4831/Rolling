import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rolling-api.vercel.app/8-5',
});

export async function getRecipientById(id) {
  try {
    const result = await instance.get(`/recipients/${id}/`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 getRecipientById입니다.');
  }
}

export async function getMessagesByRecipientId({ recipientId, offset = 0, limit = 6 }) {
  const query = `limit=${limit}&offset=${offset}`;
  try {
    const result = await instance.get(`/recipients/${recipientId}/messages/?${query}`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 getMessagesByRecipientId입니다.');
  }
}

export async function deleteMessage({ messageId }) {
  try {
    const result = await instance.delete(`/messages/${messageId}/`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 deleteMessage.');
  }
}

/*
export async function postReactionByRecipientId(recipientId, params) {
  const result = await axios.post(``);
}
*/
