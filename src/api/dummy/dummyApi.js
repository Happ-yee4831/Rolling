async function postRecipients() {
  const response = await fetch('https://rolling-api.vercel.app/8-5/recipients/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      team: '8-5',
      name: '강효성',
      backgroundColor: 'beige',
      backgroundImageURL: 'https://avatars.githubusercontent.com/u/170175553?v=4',
    }),
  });
  const result = await response.json();
  console.log(result);
}
