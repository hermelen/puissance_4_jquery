$(document).ready(function(){
 var mainElmt = $('main');
 var tableA = $("<table>");
 var joueur = 1;
 var trA = [];
// var titre = document.getElementsByTagName('h1')[0];
// var mainElmt = document.getElementsByTagName('main')[0];
// var tableA = document.createElement("table");
// var joueur = 1;

// var trA = [];
// var tableData = [];
for (var j = 0; j < 6; j++) {
  trA[j] = $("tr");
  trAj = trA[j];
$(tableA).append($(trAj));
  console.log(tableA)
// for (var j = 0; j < 6; j++) {
//   trA[j] = document.createElement("tr");
//   trAj = trA[j];
  // for (var i = 0; i < 7; i++) {
  //   trA[j][i] = document.createElement("td");
  //   tdAi = trA[j][i];
  //   tdAi.className = "grey";
  //   trAj.append(tdAi);
  // }
   for (var i = 0; i < 7; i++) {
      trA[j][i] = $("td");
      tdAi = trA[j][i];
      tdAi.className = "grey";
      trAj.append(tdAi);
      tableA.append(trAj);
   }
}

mainElmt.prepend(tableA);

var tableB = document.createElement("table");
mainElmt.className = "player_1";
var trB = document.createElement("tr");
var tdB = [];
for (var i = 0; i < 7; i++) {
  tdB[i] = document.createElement("td");
  tdBi = tdB[i];
  tdBi.id = i;
  tdBi.addEventListener('click', function() {
    if (joueur == 1) {
      mainElmt.className = "player_2";
      color = "blue";
      joueur = 2;
      jeton = document.createElement('div');
      jeton.style.backgroundColor = color;
      jeton.className = "jeton";
    } else if (joueur == 2) {
      mainElmt.className = "player_1";
      color = "red";
      joueur = 1;
      jeton = document.createElement('div');
      jeton.style.backgroundColor = color;
      jeton.className = "jeton";
    }
    for (var i = 5; i >= 0; i--) {
      row = i;
      col = parseInt(this.id);
      if (trA[row][col].className == "grey") {
        trA[row][col].className = color;
        trA[row][col].append(jeton);
        setTimeout(function(){
          jeton.classList.add('bottom');
        }, 100)
        checkWin();
        break;
      }
    }
  });


  trB.append(tdBi);
}
tableB.append(trB);
mainElmt.prepend(tableB);

function checkWin() {
  // console.log(trA);

  // for (var j = 1; j < 8; j++) {
  //   if (trA[row][col+j]){
  //     console.log(trA[row][col+j].children[0].style.backgroundColor);
  //   }
  // }

  for (var j = 0; j < 4; j++) {
    if (trA[row][j].className == color && trA[row][j+1].className == color && trA[row][j+2].className == color && trA[row][j+3].className == color) {
      youWin(color)
    }
  }
  if (i < 3) {
    if (trA[row + 1][col].className == color && trA[row + 2][col].className == color && trA[row + 3][col].className == color) {
      youWin(color)
    }
    if (col > 2) {
      if (trA[row + 1][col - 1].className == color && trA[row + 2][col - 2].className == color && trA[row + 3][col - 3].className == color) {
        youWin(color)
      }
    }
    if (col < 4) {
      if (trA[row + 1][col + 1].className == color && trA[row + 2][col + 2].className == color && trA[row + 3][col + 3].className == color) {
        youWin(color)
      }
    }
  }
}

function youWin(color){
  var winDiv = document.createElement('div');
  winDiv.className = "win";
  winDiv.innerHTML = "Victoire de "+color+"!";
  mainElmt.append(winDiv);
  setTimeout(function(){
    window.location.reload()
  }, 3000)
}






})
