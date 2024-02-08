count=0;
function createCard(title, Cname, views, monthsOld, thumbnail,time) {
    if(views%1000==0){
      views=String(views/1000)+"K";
    }
    else if(views%1000000==0){
      views=String(views/1000000)+"M";

    }
    html =`<div class="card"><div class="count">${count}</div><div class="thumbn"><div class="timestamp">${time}</div></div><div class="details"><div class="title">${title}</div><ul class="moredetails"><li class="channel">${Cname}</li><li class="views">${views}</li><li class="months">${monthsOld} months old</li></ul></div></div>`;
    // document.querySelector(".container").append(card);
    document.querySelector(".container").insertAdjacentHTML("beforeend",html);
    thmbn=document.querySelectorAll(".thumbn");
    thmbn.forEach(element => {
      element.style.backgroundImage="url('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw')";
    });
    
    // document.querySelector(".timestamp").insertAdjacentText("afterbegin",`${time}`)
  }
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");
  createCard(`Introduction to Backend | Sigma Web Dev video-tutorial #${count++}`, "CodeWithHarry", 45000, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:00");