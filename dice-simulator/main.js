"use srict";

document.getElementById("play-btn").addEventListener("click", Rollhouse);
document.getElementById("purchase-btn").addEventListener("click", purchase);
document.getElementById("spend-all-btn").addEventListener("click", spend);
//Rolling the dice
function Rollhouse() {
  let randnum = Math.random();
  //The house roll
  if (randnum < 0.1) {
    console.log("one");
    randnum++;
    document.getElementById("house-die").innerHTML +=
      '<img src="images/1.png" height=80px>';
  } else if (randnum < 0.2) {
    console.log("two");
    randnum++;
    document.getElementById("house-die").innerHTML +=
      '<img src="images/2.png" height=80px>';
  } else if (randnum < 0.3) {
    console.log("three");
    randnum++;
    document.getElementById("house-die").innerHTML +=
      '<img src="images/3.png" height=80px>';
  } else if (randnum < 0.4) {
    console.log("four");
    randnum++;
    document.getElementById("house-die").innerHTML +=
      '<img src="images/4.png" height=80px>';
  } else if (randnum < 0.5) {
    console.log("five");
    randnum++;
    document.getElementById("house-die").innerHTML +=
      '<img src="images/5.png" height=80px>';
  } else if (randnum < 0.6) {
    console.log("six");
    randnum++;
    document.getElementById("house-die").innerHTML +=
      '<img src="images/6.png" height=80px>';
  } //THE PLAYERS ROLL
    else if (randnum < 0.1) {
    console.log("one");
    randnum++;
    document.getElementById("player-die").innerHTML +=
      '<img src="images/1.png" height=80px>';
  } else if (randnum < 0.2) {
    console.log("two");
    randnum++;
    document.getElementById("player-die").innerHTML +=
      '<img src="images/2.png" height=80px>';
  } else if (randnum < 0.3) {
    console.log("three");
    randnum++;
    document.getElementById("player-die").innerHTML +=
      '<img src="images/3.png" height=80px>';
  } else if (randnum < 0.4) {
    console.log("four");
    randnum++;
    document.getElementById("player-die").innerHTML +=
      '<img src="images/4.png" height=80px>';
  } else if (randnum < 0.5) {
    console.log("five");
    randnum++;
    document.getElementById("player-die").innerHTML +=
      '<img src="images/5.png" height=80px>';
  } else if (randnum < 0.6) {
    console.log("six");
    randnum++;
    document.getElementById("player-die").innerHTML +=
      '<img src="images/6.png" height=80px>';
  }
}


//Random loot pool for riches and luxury

function purchase() {
  let randnum = Math.random();

  if (randnum < 0.01) {
    document.getElementById("loot").innerHTML +=
      '<img src="images/socks.png" height=80px>';
  } else if (randnum > 0.66) {
    document.getElementById("loot").innerHTML +=
      '<img src="images/ring.png" height=80px>';
  } else if (randnum > 0.33) {
    document.getElementById("loot").innerHTML +=
      '<img src="images/bike.jpg" height=80px>';
  } else if (randnum < 0.99) {
    document.getElementById("loot").innerHTML +=
      '<img src="images/trip.jpg" height=80px>';
  } else if (randnum >= 0.75) {
    document.getElemetById("loot").innerHTML +=
      '<img src="images/motorcycle.jpg" height=80px>';
  } else if (randnum >= 0.5) {
    document.getElemetById("loot").innerHTML +=
      '<img src="images/house.png" height=80px>';
  } else if (randnum >= 0.25) {
    document.getElemetById("loot").innerHTML +=
      '<img src="images/car.png" height=80px>';
  }
}
function spend() {
    let i = document.getElementById("funds").value
    for (let n = 0; n > i;) {
      Generate();
    }
  }