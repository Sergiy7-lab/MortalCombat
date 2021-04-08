const Scorpion = {
  name: "Scorpion",
  hp: 95,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(player1.name + "Fight...");
  },
};

const Kitana = {
  name: "Kitana",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

const Liukang = {
  name: "Liukang",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

const Sonya = {
  name: "Sonya",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

const Subzero = {
  name: "Subzero",
  hp: 90,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

function createPlayer(player, character) {
  const $arenas = document.querySelector(".arenas");
  const player1 = document.createElement("div");
  const $progressbar = document.createElement("div");
  const $character = document.createElement("div");
  const $life = document.createElement("div");
  const $name = document.createElement("div");
  const $img = document.createElement("img");

  player1.classList.add(player);
  player1.appendChild($progressbar);
  player1.appendChild($character);

  $progressbar.classList.add("progressbar");
  $progressbar.appendChild($life);
  $life.classList.add("life");
  $life.style.width = "100%";
  $life.style.width = character.hp + "%";
  $progressbar.appendChild($name);
  $name.classList.add("name");
  $name.innerText = character.name;

  $character.classList.add("character");
  $character.appendChild($img);
  $img.src = character.img;

  $arenas.appendChild(player1);
}

createPlayer("player1", Liukang);
createPlayer("player2", Subzero);
