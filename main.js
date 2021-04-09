const $arenas = document.querySelector(".arenas");
const $randButton = document.querySelector(".button");

const Scorpion = {
  player: "",
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(Scorpion.name + "Fight...");
  },
};

const Kitana = {
  player: "",
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(Kitana.name + "Fight...");
  },
};

const Liukang = {
  player: "",
  name: "Liukang",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(Liukang.name + "Fight...");
  },
};

const Sonya = {
  player: "",
  name: "Sonya",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(Sonya.name + "Fight...");
  },
};

const Subzero = {
  player: "",
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["knife", "gun"],
  attack: function () {
    console.log(Subzero.name + "Fight...");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(objPlayer) {
  const $player = createElement("div", "player" + objPlayer.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = objPlayer.hp + "%";
  $name.innerText = objPlayer.name;
  $img.src = objPlayer.img;

  console.log($life.style.width);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

function changeHp(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= random();
  $playerLife.style.width = player.hp + "%";

  if (player.hp <= 1) {
    player.hp = 0;
    $playerLife.style.width = player.hp + "%";
    $randButton.disabled = true;
  }
}
function playerWin(name) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = name + " wins";
  return $winTitle;
}

function random() {
  return Math.ceil(Math.random() * 20);
}

let player1 = randomPlayers(1);
let player2 = randomPlayers(2);

if (player1.name == player2.name) {
  Scorpion.player = 1;
  Kitana.player = 2;
  player1 = Scorpion;
  player2 = Kitana;
}

function randomPlayers(number) {
  let player = [Scorpion, Kitana, Liukang, Sonya, Subzero];
  let i = Math.floor(Math.random() * player.length);
  player[i].player = number;
  return player[i];
}

$randButton.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);
  console.log(player1.hp);
  console.log(player2.hp);

  if (player1.hp == 0 || player2.hp == 0) {
    if (player1.hp < player2.hp) {
      $arenas.appendChild(playerWin(player2.name));
    } else {
      $arenas.appendChild(playerWin(player1.name));
    }
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
