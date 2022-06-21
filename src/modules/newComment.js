import { displayComents, getComments } from './displayComents.js';

// function to post element
const postNewMessage = async (id, name, text) => {
  const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/655UItTdFhblxuLYFXUt/comments';
  const request = new Request(postMessageLink);
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  };

  await fetch(request, data);
  const arr = await getComments(id);
  const container = document.getElementById('mesgContainer');
  displayComents(arr, container);
};

const newMessage = (id, user, message) => {
  if (user.value !== '' && message.value !== '') {
    postNewMessage(id, user.value, message.value);
    user.value = '';
    message.value = '';
  }
};