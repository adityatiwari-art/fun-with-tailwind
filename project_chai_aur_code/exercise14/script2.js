let list = [
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement",
  "Initialising Hacking",
  "reading files",
  "extracting keys and passwords",
  "sending to the server",
  "cleaning up the environement"
];
async function addTime() {
  let num = 1 + Math.random() * 2;
  return new Promise((receive, reject) => {
    setTimeout(() => {
      receive();
    }, num * 1000);
  });
}

async function addData(mess) {
  await addTime();
  div = document.createElement("div");
  div.append(list[mess]);
  document.querySelector("#container").append(div);
}
async function main() {
  setInterval(() => {
    last = document.querySelector("#container").lastElementChild;
    if (last.innerHTML.endsWith("..."))
      {
        last.innerHTML =
         last.innerHTML.slice(0,last.innerHTML.length - 3);
      }
    else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 300);
  for (const mess in list) {
    await addData(mess);

    // first take item then wait for random time
  }
}
main();