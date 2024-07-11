const BASE_URL = `https://rolling-api.vercel.app/8-5`;
const ID = 0;

const backgroundColors = ['beige' | 'purple' | 'blue' | 'green'];

async function postRecipients() {
  const response = await fetch('https://rolling-api.vercel.app/8-5/recipients/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      team: '8-5',
      name: '강효성',
      backgroundColor: backgroundColors[ID],
      backgroundImageURL: 'https://avatars.githubusercontent.com/u/170175553?v=4',
    }),
  });
  const result = await response.json();
  console.log(result);
}

const relationships = ['친구', '지인', '동료', '가족'];
const fonts = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
const profileImageURLs = [
  'https://avatars.githubusercontent.com/u/170175553?v=4',
  'https://avatars.githubusercontent.com/u/71882441?v=4',
  'https://avatars.githubusercontent.com/u/127219927?v=4',
  'https://avatars.githubusercontent.com/u/164169016?v=4',
];

async function postRecipientMessage(id) {
  const response = await fetch(`${BASE_URL}/recipients/${id}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      team: '8-5',
      recipientId: id,
      sender: '김강우',
      profileImageURL: profileImageURLs[ID],
      relationship: relationships[ID],
      content: 'From 김강우 to 강효성',
      font: fonts[ID],
    }),
  });
  console.log(response);
  const result = await response.json();
  console.log(result);
}

postRecipientMessage(8390);
