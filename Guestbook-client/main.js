console.log("Hello world!");
let form = document.querySelector("#gbform");
console.log(form);
async function butSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  try {
    const check = await fetch(
      "https://week-4-project-guestbook-server.onrender.com/messages",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );

    const data = await check.json();
    console.log(data);
    if (data.success) {
      console.log("Form submitted");
      await findMessages();
      await showNumber();
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
form.addEventListener("submit", butSubmit);
let messageList = document.querySelector("#message-list");

let b1 = document.getElementById("b1");

async function findMessages() {
  const response = await fetch(
    "https://week-4-project-guestbook-server.onrender.com/message-list"
  );
  const messageValues = await response.json();
  messageList.textContent = "";
  messageValues.forEach((message) => {
    const messageItem = document.createElement("li");
    messageItem.id = `usernames${message.id}`;
    messageItem.innerHTML = `<p><img src="https://avatar.iran.liara.run/public" alt="Avatar" width="50" height="50"> ${message.username}-${message.reaction}: ${message.message} Would they come back: ${message.return_value}.</p>`;
    messageList.appendChild(messageItem);
  });
}
findMessages();

async function showNumber() {
  let counter = document.getElementById("message-number");
  const response = await fetch(
    "https://week-4-project-guestbook-server.onrender.com/count"
  );
  const messageNumber = await response.json();
  counter.textContent = `Number of visitors that provided feedback: ${messageNumber[0].count}`;
}
showNumber();
