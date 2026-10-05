const title = document.getElementById("title");

title.textContent = "Welcome to the Live DOM Tree";
title.style.color = "blue";


const message = document.getElementById("message");

message.textContent = "The page has been changed using JavaScript.";
message.style.fontSize = "20px";


const status = document.querySelector(".status");

status.textContent = "Status: Active";
status.classList.add("active");