/* eslint-disable */
const BASE_URL = 'https://rolling-api.vercel.app/';

const getDataBackgroundImg = async () => {
  try {
    const response = await fetch(`${BASE_URL}background-images/`);
    const body = await response.json();

    return body;
  } catch (err) {
    console.log(err.message);
  }
};

const postUserData = async (sendData) => {
  console.log(sendData);
  try {
    const response = await fetch(`${BASE_URL}8-5/recipients/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendData),
    });
    
    const body = await response.json();
    return body;
  } catch (err) {
    console.error('에러입니다', err);
  }
};

const fetchProfileImg = async () => {
  const response = await fetch(`${BASE_URL}profile-images/`);
  const data = await response.json();
  return data;
};

export {
  getDataBackgroundImg,
  postUserData,
  fetchProfileImg,
};