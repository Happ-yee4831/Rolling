import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rolling-api.vercel.app/8-5',
});

export async function getRecipientById(id) {
  try {
    const result = await instance.get(`/recipients/${id}/`);
    return result;
  } catch (err) {
    throw new Error('잘못 요청된 getRecipientById입니다.');
  }
}

export async function getMessagesByRecipientId({ recipientId, offset = 0, limit = 6 }) {
  console.log(recipientId, offset, limit);
  const params = { offset, limit };
  try {
    const result = await instance.get(`/recipients/${recipientId}/messages/`, {
      params,
    });
    return result;
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

export async function deleteRecipients({ recipientId }) {
  try {
    const result = await instance.delete(`/recipients/${recipientId}/`);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 deleteRecipients.');
  }
}

export async function getReactionsByRecipientId(id, limit) {
  const params = { limit };
  try {
    const result = await instance.get(`/recipients/${id}/reactions/`, {
      params,
    });
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

export async function postReactionsByRecipientId(id, data) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const result = await instance.post(
      `recipients/${id}/reactions/`,
      {
        ...data,
      },
      config,
    );
    return result;
  } catch (e) {
    throw new Error(e);
  }
}
