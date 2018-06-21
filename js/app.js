$( document ).ready(function() {
  var mainElmt = $('main');
  var tableA = $("<table>");
  var joueur = 1;
  var trA = [];

  for (var j = 0; j < 6; j++) {
    trA[j] = $("<tr>");
    trAj = trA[j];
    tableA.append(trAj);
    for (var i = 0; i < 7; i++) {
      trA[j][i] = $("<td>");
      trAji = trA[j][i];
      trAji.addClass('grey');
      trAj.append(trAji);
      tableA.append(trAj);
    }
  }
  $mainElmt.append(tableA);


  // var tableB = document.createElement("table");
  // mainElmt.className = "player_1";
  // var trB = document.createElement("tr");
  // var tdB = [];
  // for (var i = 0; i < 7; i++) {
  //   tdB[i] = document.createElement("td");
  //   tdBi = tdB[i];
  //   tdBi.id = i;
  //   tdBi.addEventListener('click', function() {
  //     if (joueur == 1) {
  //       mainElmt.className = "player_2";
  //       color = "blue";
  //       joueur = 2;
  //       jeton = document.createElement('div');
  //       jeton.style.backgroundColor = color;
  //       jeton.className = "jeton";
  //     } else if (joueur == 2) {
  //       mainElmt.className = "player_1";
  //       color = "red";
  //       joueur = 1;
  //       jeton = document.createElement('div');
  //       jeton.style.backgroundColor = color;
  //       jeton.className = "jeton";
  //     }
  //     for (var i = 5; i >= 0; i--) {
  //       row = i;
  //       col = parseInt(this.id);
  //       if (trA[row][col].className == "grey") {
  //         trA[row][col].className = color;
  //         trA[row][col].append(jeton);
  //         setTimeout(function() {
  //           jeton.classList.add('bottom');
  //         }, 100)
  //         checkWin();
  //         break;
  //       }
  //     }
  //   });
  //
  //
  //   trB.append(tdBi);
  // }
  // tableB.append(trB);
  // mainElmt.prepend(tableB);
  //
  // function checkWin() {
  //
  //   for (var j = 0; j < 4; j++) {
  //     if (trA[row][j].className == color && trA[row][j + 1].className == color && trA[row][j + 2].className == color && trA[row][j + 3].className == color) {
  //       youWin(color)
  //     }
  //   }
  //   if (i < 3) {
  //     if (trA[row + 1][col].className == color && trA[row + 2][col].className == color && trA[row + 3][col].className == color) {
  //       youWin(color)
  //     }
  //     if (col > 2) {
  //       if (trA[row + 1][col - 1].className == color && trA[row + 2][col - 2].className == color && trA[row + 3][col - 3].className == color) {
  //         youWin(color)
  //       }
  //     }
  //     if (col < 4) {
  //       if (trA[row + 1][col + 1].className == color && trA[row + 2][col + 2].className == color && trA[row + 3][col + 3].className == color) {
  //         youWin(color)
  //       }
  //     }
  //   }
  // }
  //
  // function youWin(color) {
  //   var winDiv = document.createElement('div');
  //   winDiv.className = "win";
  //   winDiv.innerHTML = "Victoire de " + color + "!";
  //   mainElmt.append(winDiv);
  //   setTimeout(function() {
  //     window.location.reload()
  //   }, 3000)
  // }






})
