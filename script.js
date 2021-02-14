class Piece {
  constructor(letter, number, type, team) {
    this.letter = letter;
    this.number = number;
    this.type = type;
    this.team = team;
  }
}

class Board {
  constructor() {
    this.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.game = {};
    for (var i = 0; i < this.numbers.length; i++) {
      for (var j = 0; j < this.letters.length; j++) {
        this.game[this.letters[j] + this.numbers[i].toString()] = null;
      }
    }

    let pattern = [
      "rook",
      "knight",
      "bishop",
      "queen",
      "king",
      "bishop",
      "knight",
      "rook",
    ];

    let redletters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (var i = 0; i < redletters.length; i++) {
      this.game[redletters[i] + "2"] = new Piece(
        redletters[i],
        2,
        "pawn",
        "red"
      );

      this.game[redletters[i] + "1"] = new Piece(
        redletters[i],
        1,
        pattern[i],
        "red"
      );
    }

    let whiteletters = ["l", "k", "j", "i", "d", "c", "b", "a"];
    for (var i = 0; i < whiteletters.length; i++) {
      this.game[whiteletters[i] + "7"] = new Piece(
        whiteletters[i],
        7,
        "pawn",
        "white"
      );

      this.game[whiteletters[i] + "8"] = new Piece(
        whiteletters[i],
        8,
        pattern[i],
        "white"
      );
    }

    let blackletters = ["h", "g", "f", "e", "i", "j", "k", "l"];
    for (var i = 0; i < blackletters.length; i++) {
      this.game[blackletters[i] + "11"] = new Piece(
        blackletters[i],
        11,
        "pawn",
        "black"
      );

      this.game[blackletters[i] + "12"] = new Piece(
        blackletters[i],
        12,
        pattern[i],
        "black"
      );
    }
  }

  move(origPosition, newPosition) {
    console.log("tried to move from", origPosition, "to", newPosition);
    // check if there is a piece on the original square
    // check if that type of move is valid for that type of piece
    // check if there are any pieces in the way
    // check if there is a piece on the end square that would become taken
  }
}

function drawBoard() {
  var w = 650; // width
  var h = 450; // height
  var cx = w * 0.5; // center of board
  var cy = h * 0.5;
  var r = cx * 0.9, // radius of board (it is 0.9 because you don't want to go all the way to the edge)
}

// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");

//   pi2 = Math.PI * 2, // cache
//   segments = 6, // a hexagon based shape so 6
//   segment = pi2 / segments, // angle of each segment
//   hSegment = segment * 0.5, // half segment for center line
//   ul,
//   ur,
//   bl,
//   br, // quad. corners
//   check = 0.25, // interpolation interval (one check)
//   yc = 0,
//   xc = 0, // interpolation counters
//   toggle = false, // for color
//   x,
//   y = 0,
//   i = 0; // counters...

// var ul = {
//   x: cx,
//   y: cy,
// };

// var ur = {
//   x: cx + r * Math.cos(hSegment) * 0.865,
//   y: cy + r * Math.sin(hSegment) * 0.865,
// };

// var br = {
//   x: cx + r * Math.cos(segment),
//   y: cy + r * Math.sin(segment),
// };

// var bl = {
//   x: cx + r * Math.cos(hSegment + segment) * 0.865,
//   y: cy + r * Math.sin(hSegment + segment) * 0.865,
// };

// function getInt(p1, p2, t) {
//   return {
//     x: p1.x + (p2.x - p1.x) * t,
//     y: p1.y + (p2.y - p1.y) * t,
//   };
// }

// for (; i < segments; i++) {
//   // loop six segments
//   toggle = !toggle; // alter color each segment
//   // loop quadrilateral grid 4x4 cells (5x5 lines exclusive)
//   for (y = 0, yc = 0; y < 4; y++) {
//     for (x = 0, xc = 0; x < 4; x++) {
//       // for upper lines (ul-ur), get first row:
//       var l1a = getInt(ul, bl, yc),
//         l1b = getInt(ur, br, yc),
//         l2a = getInt(ul, bl, yc + check),
//         l2b = getInt(ur, br, yc + check),
//         c1 = getInt(l1a, l1b, xc),
//         c2 = getInt(l1a, l1b, xc + check),
//         c3 = getInt(l2a, l2b, xc + check),
//         c4 = getInt(l2a, l2b, xc);

//       ctx.beginPath();
//       ctx.moveTo(c1.x, c1.y);
//       ctx.lineTo(c2.x, c2.y);
//       ctx.lineTo(c3.x, c3.y);
//       ctx.lineTo(c4.x, c4.y);
//       ctx.fillStyle = toggle ? "#001711" : "#e9f0ee";
//       ctx.fill();

//       toggle = !toggle;
//       xc += check;
//     }
//     yc += check; // next segment line
//     toggle = !toggle; // toggle per line as well
//   }
//   ctx.translate(cx, cy); // translate to center
//   ctx.rotate(segment); // rotate one segment
//   ctx.translate(-cx, -cy); // translate back
// }
