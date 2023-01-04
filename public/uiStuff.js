let winHeight = $(window).height();
let winWidth = $(window).width();
const player = {}; // all things related to the player

const canvas = document.querySelector("#the-canvas");
const context = canvas.getContext("2d");

canvas.width = winWidth;
canvas.height = winHeight;

$(window).load(() => {
  $("#loginModal").modal("show");
});

$(".name-form").submit((event) => {
  event.preventDefault();

  const guestNameInput = document.querySelector("#name-input");
  player.name = guestNameInput.value;
  guestNameInput.value = "";

  $("#loginModal").modal("hide");
  $("#spawnModal").modal("show");

  document.querySelector(".player-name").innerHTML = player.name;
});

$(".start-game").click((event) => {
  $(".modal").modal("hide");
  $(".hiddenOnStart").removeAttr("hidden");
  //   init();
});
