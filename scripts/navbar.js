// Find nav-toggle checkbox
const navToggle = document.getElementById("nav-toggle");

// Find all relavent nav links
const navTop = document.getElementById("nav-top");
const navListen = document.getElementById("nav-listen");
const navSocial = document.getElementById("nav-social");
const navContact = document.getElementById("nav-contact");

// Events to click checkbox on link
navTop.addEventListener('click', event => {
  navToggle.click();
});

navListen.addEventListener('click', event => {
  navToggle.click();
});

navSocial.addEventListener('click', event => {
  navToggle.click();
});

navContact.addEventListener('click', event => {
  navToggle.click();
});