const countComment = (arr, title) => {
  const counter = ` (${arr.length})`;
  title.innerHTML += counter;
};

const displayComents = (arr, container) => {
  container.innerHTML = '';
  const title = document.createElement('h3');
  title.innerHTML = 'Comments';
  container.appendChild(title);
  const messageData = document.createElement('div');
  messageData.classList.add('mesgContent');
  if (!arr.error) {
    countComment(arr, title);
    arr.forEach((element) => {
      const messItem = document.createElement('div');
      messItem.innerHTML = `
      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr/>`;
      messageData.appendChild(messItem);
    });
  } else {
    title.innerText += ' (0)';
    messageData.innerHTML = '<span>Any Comments Yet</span><hr width="250px">';
  }
  container.appendChild(messageData);
};