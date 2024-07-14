const BASE_URL = `https://rolling-api.vercel.app/8-5`;
const ID = 1;

const backgroundColors = ['beige' | 'purple' | 'blue' | 'green'];

async function postRecipients() {
  const response = await fetch(`${BASE_URL}/recipients/`, {
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
  const result = await response.json();
}

const emojis = ['😂', '😂', '😂', '😂', '😊', '🤣', '❤️', '👍', '👍', '👍', '👍', '👍'];

async function postRecipientsReactions(id, emoji) {
  const response = await fetch(`${BASE_URL}/recipients/${id}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emoji,
      type: 'increase',
    }),
  });
  const result = await response.json();
  console.log(result);
}

async function patchMessageById(id) {
  const response = await fetch(`${BASE_URL}/messages/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      profileImageURL: profileImageURLs[ID],
    }),
  });
  const result = await response.json();
}

emojis.forEach(emoji => {
  postRecipientsReactions(8390, emoji);
});
