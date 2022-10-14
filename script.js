// Set variables

let notifications;

const badge = document.querySelector(".heading__badge");
const allRead = document.querySelector(".read-btn");
const noti = document.querySelector(".notification");
const notiNew = document.querySelector(".new");
const notiAll = document.querySelectorAll(".notification");
let notiNewAll = document.querySelectorAll(".new");

// Count notifications

function countNotifications() {
  notifications = notiNewAll.length;
  badge.innerHTML = notifications;
}

// Notifications initial display

countNotifications();

// Mark individaul notification as read

notiNewAll.forEach((element) =>
  element.addEventListener("click", function (e) {
    element.classList.remove("new");
    notiNewAll = document.querySelectorAll(".new");
    countNotifications();
  })
);

// Mark all notifications as read

allRead.addEventListener("click", function (e) {
  notiNewAll.forEach((element) => element.classList.remove("new"));
});
