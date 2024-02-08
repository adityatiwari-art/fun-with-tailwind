let idcount = 1;
count=1;

function sendingMessage(message, idname) {
  let num = Math.ceil(1 + Math.random() * 2);
  setTimeout(() => {
    let div = document.createElement("div");
    let dots = document.createElement("span");
    div.innerHTML = `${message}`;
    dots.innerHTML = "...";
    div.id = `${idname}`;
    dots.id =`blink${count++}`;
    dots.className = "blinking";
    document
      .querySelector("#container")
      .insertAdjacentElement("beforeend", div);
    document
      .querySelector(`#${idname}`)
      .insertAdjacentElement("beforeend", dots);
      function blinker() {
        setInterval(() => {
          document.querySelector(`#${dots.id}`).classList.toggle("blinking");
      }, 500);
      }
blinker();
  }, num * 1000);
  clearInterval()
}
sendingMessage("Initialising hacking", `text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
sendingMessage("Reading your files",`text${idcount++}`);
sendingMessage("Password Files Detected",`text${idcount++}`);
sendingMessage("Sending all passwords to the server",`text${idcount++}`);
sendingMessage("Cleaning up",`text${idcount++}`);
sendingMessage("Initialising hacking",`text${idcount++}`);
