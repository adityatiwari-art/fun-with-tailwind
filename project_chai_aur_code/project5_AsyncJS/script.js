console.log("welcome to the generator");
let clearMe;
const randColor = function () {
  if (!clearMe) {
    clearMe = setInterval(() => {
      let randnum = Math.ceil(Math.random() * 16777215);
      const randColor = randnum.toString(16);
      document.getElementById("bg").style.background = `#${randColor}`;
    }, 1000);
  }
};

document.querySelector("#start").addEventListener("click", randColor);
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(clearMe);
  clearMe = null;
});
const num = 0xffffff;
console.log(parseInt(num));
