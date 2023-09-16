// script.js
const loveButton = document.getElementById("showLove");
const loveMessage = document.getElementById("loveMessage");

const loveMessages = [
    "เค้ารักเธอนะ!",
    "เธอเป็นคนทำให้เค้ามีความสุขมากๆ",
    "เธอคือทุกสิ่งสวยงามในชีวิตของเค้า",
    "เธอคือแสงสว่างในวันที่เค้ามืดมน",
    "เค้ารักโฟร์ดมากๆๆๆนะ!",
];

loveButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const randomMessage = loveMessages[randomIndex];
    loveMessage.textContent = randomMessage;
});
