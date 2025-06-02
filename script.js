document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".chat-input input");
  const button = document.querySelector(".chat-input button");
  const chatContent = document.getElementById("chat-content");

  button.addEventListener("click", () => {
    const message = input.value.trim();
    if (message) {
      const msg = document.createElement("div");
      msg.classList.add("msg", "sent");
      msg.textContent = message;
      chatContent.appendChild(msg);
      input.value = "";
      chatContent.scrollTop = chatContent.scrollHeight;
    }
  });
});
