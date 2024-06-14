console.log("Hello world!");
let form = document.querySelector("#gbform");
console.log(form);
async function butSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  await fetch("http://localhost:8080/messages", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(body);
  findMessages();
}
form.addEventListener("submit", butSubmit);
let messageList = document.querySelector("#message-list");

async function findMessages() {
  const response = await fetch("http://localhost:8080/message-list");
  const messageValues = await response.json();
  messageList.textContent = "";
  messageValues.forEach((message) => {
    const messageItem = document.createElement("li");
    messageItem.innerHTML = `<p>${message.username}-${message.reaction}:</p><p>${message.message} Would they come back: ${message.return}</p>`;
    messageList.appendChild(messageItem);
  });
}
findMessages();
