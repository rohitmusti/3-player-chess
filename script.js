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

var polygons = [];

var labels = [
  { letter: "A", position: "133", tweaks_x: 20, tweaks_y: 10 },
  { letter: "B", position: "132", tweaks_x: 25, tweaks_y: 10 },
  { letter: "C", position: "131", tweaks_x: 28, tweaks_y: 11 },
  { letter: "D", position: "130", tweaks_x: 30, tweaks_y: 15 },
  { letter: "E", position: "003", tweaks_x: -2, tweaks_y: 35 },
  { letter: "F", position: "013", tweaks_x: -5, tweaks_y: 33 },
  { letter: "G", position: "023", tweaks_x: -7, tweaks_y: 28 },
  { letter: "H", position: "033", tweaks_x: -9, tweaks_y: 25 },
  { letter: "A", position: "233", tweaks_x: -11, tweaks_y: 25 },
  { letter: "B", position: "223", tweaks_x: -11, tweaks_y: 28 },
  { letter: "C", position: "213", tweaks_x: -11, tweaks_y: 30 },
  { letter: "D", position: "203", tweaks_x: -9, tweaks_y: 35 },
  { letter: "I", position: "330", tweaks_x: 25, tweaks_y: 15 },
  { letter: "J", position: "331", tweaks_x: 25, tweaks_y: 15 },
  { letter: "K", position: "332", tweaks_x: 25, tweaks_y: 9 },
  { letter: "L", position: "333", tweaks_x: 25, tweaks_y: 9 },
  { letter: "H", position: "533", tweaks_x: 20, tweaks_y: 5 },
  { letter: "G", position: "532", tweaks_x: 23, tweaks_y: 8 },
  { letter: "F", position: "531", tweaks_x: 25, tweaks_y: 13 },
  { letter: "E", position: "530", tweaks_x: 27, tweaks_y: 15 },
  { letter: "I", position: "403", tweaks_x: -3, tweaks_y: 35 },
  { letter: "J", position: "413", tweaks_x: -5, tweaks_y: 33 },
  { letter: "K", position: "423", tweaks_x: -9, tweaks_y: 30 },
  { letter: "L", position: "433", tweaks_x: -11, tweaks_y: 28 },
  { letter: "1", position: "133", tweaks_x: -10, tweaks_y: 25 },
  { letter: "2", position: "123", tweaks_x: -8, tweaks_y: 28 },
  { letter: "3", position: "113", tweaks_x: -5, tweaks_y: 30 },
  { letter: "4", position: "103", tweaks_x: -3, tweaks_y: 33 },
  { letter: "5", position: "230", tweaks_x: 30, tweaks_y: 15 },
  { letter: "6", position: "231", tweaks_x: 25, tweaks_y: 13 },
  { letter: "7", position: "232", tweaks_x: 25, tweaks_y: 10 },
  { letter: "8", position: "233", tweaks_x: 20, tweaks_y: 8 },
  { letter: "1", position: "033", tweaks_x: 20, tweaks_y: 5 },
  { letter: "2", position: "032", tweaks_x: 23, tweaks_y: 8 },
  { letter: "3", position: "031", tweaks_x: 25, tweaks_y: 10 },
  { letter: "4", position: "030", tweaks_x: 28, tweaks_y: 14 },
  { letter: "9", position: "503", tweaks_x: -5, tweaks_y: 35 },
  { letter: "10", position: "513", tweaks_x: -8, tweaks_y: 30 },
  { letter: "11", position: "523", tweaks_x: -11, tweaks_y: 27 },
  { letter: "12", position: "533", tweaks_x: -14, tweaks_y: 23 },
  { letter: "8", position: "333", tweaks_x: -7, tweaks_y: 25 },
  { letter: "7", position: "323", tweaks_x: -10, tweaks_y: 28 },
  { letter: "6", position: "313", tweaks_x: -10, tweaks_y: 31 },
  { letter: "5", position: "303", tweaks_x: -7, tweaks_y: 33 },
  { letter: "9", position: "430", tweaks_x: 26, tweaks_y: 19 },
  { letter: "10", position: "431", tweaks_x: 22, tweaks_y: 15 },
  { letter: "11", position: "432", tweaks_x: 20, tweaks_y: 13 },
  { letter: "12", position: "433", tweaks_x: 18, tweaks_y: 10 },
];

const idtopos = {
  a133: { column: "A", row: "1" },
  a123: { column: "A", row: "2" },
  a113: { column: "A", row: "3" },
  a103: { column: "A", row: "4" },
  a230: { column: "A", row: "5" },
  a231: { column: "A", row: "6" },
  a232: { column: "A", row: "7" },
  a233: { column: "A", row: "8" },

  a132: { column: "B", row: "1" },
  a122: { column: "B", row: "2" },
  a112: { column: "B", row: "3" },
  a102: { column: "B", row: "4" },
  a220: { column: "B", row: "5" },
  a221: { column: "B", row: "6" },
  a222: { column: "B", row: "7" },
  a223: { column: "B", row: "8" },

  a131: { column: "C", row: "1" },
  a121: { column: "C", row: "2" },
  a111: { column: "C", row: "3" },
  a101: { column: "C", row: "4" },
  a210: { column: "C", row: "5" },
  a211: { column: "C", row: "6" },
  a212: { column: "C", row: "7" },
  a213: { column: "C", row: "8" },

  a130: { column: "D", row: "1" },
  a120: { column: "D", row: "2" },
  a110: { column: "D", row: "3" },
  a100: { column: "D", row: "4" },
  a200: { column: "D", row: "5" },
  a201: { column: "D", row: "6" },
  a202: { column: "D", row: "7" },
  a203: { column: "D", row: "8" },

  a003: { column: "E", row: "1" },
  a002: { column: "E", row: "2" },
  a001: { column: "E", row: "3" },
  a000: { column: "E", row: "4" },
  a500: { column: "E", row: "9" },
  a510: { column: "E", row: "10" },
  a520: { column: "E", row: "11" },
  a530: { column: "E", row: "12" },

  a013: { column: "F", row: "1" },
  a012: { column: "F", row: "2" },
  a011: { column: "F", row: "3" },
  a010: { column: "F", row: "4" },
  a501: { column: "F", row: "9" },
  a511: { column: "F", row: "10" },
  a521: { column: "F", row: "11" },
  a531: { column: "F", row: "12" },

  a023: { column: "G", row: "1" },
  a022: { column: "G", row: "2" },
  a021: { column: "G", row: "3" },
  a020: { column: "G", row: "4" },
  a502: { column: "G", row: "9" },
  a512: { column: "G", row: "10" },
  a522: { column: "G", row: "11" },
  a532: { column: "G", row: "12" },

  a033: { column: "H", row: "1" },
  a032: { column: "H", row: "2" },
  a031: { column: "H", row: "3" },
  a030: { column: "H", row: "4" },
  a503: { column: "H", row: "9" },
  a513: { column: "H", row: "10" },
  a523: { column: "H", row: "11" },
  a533: { column: "H", row: "12" },

  a330: { column: "I", row: "8" },
  a320: { column: "I", row: "7" },
  a310: { column: "I", row: "6" },
  a300: { column: "I", row: "5" },
  a400: { column: "I", row: "9" },
  a401: { column: "I", row: "10" },
  a402: { column: "I", row: "11" },
  a403: { column: "I", row: "12" },

  a331: { column: "J", row: "8" },
  a321: { column: "J", row: "7" },
  a311: { column: "J", row: "6" },
  a301: { column: "J", row: "5" },
  a410: { column: "J", row: "9" },
  a411: { column: "J", row: "10" },
  a412: { column: "J", row: "11" },
  a413: { column: "J", row: "12" },

  a332: { column: "K", row: "8" },
  a322: { column: "K", row: "7" },
  a312: { column: "K", row: "6" },
  a302: { column: "K", row: "5" },
  a420: { column: "K", row: "9" },
  a421: { column: "K", row: "10" },
  a422: { column: "K", row: "11" },
  a423: { column: "K", row: "12" },

  a333: { column: "L", row: "8" },
  a323: { column: "L", row: "7" },
  a313: { column: "L", row: "6" },
  a303: { column: "L", row: "5" },
  a430: { column: "L", row: "9" },
  a431: { column: "L", row: "10" },
  a432: { column: "L", row: "11" },
  a433: { column: "L", row: "12" },
};

function drawBoard() {
  var width = 750; // width
  var height = 750; // height
  var center_x = width * 0.5; // center of board
  var center_y = height * 0.5;
  var radius = center_x * 0.9; // radius of board (it is 0.9 because you don't want to go all the way to the edge)
  var segments = 6; // a hexagon based shape so 6
  var segment = (Math.PI * 2) / segments; // angle of each segment
  var halfSegment = segment * 0.5; // half segment for center line
  var ul, ur, bl, br; // quad. corners
  var check = 0.25; // interpolation interval (one check)
  var yc = 0;
  var xc = 0; // interpolation counters
  var toggle = false; // for color
  var x = 0,
    y = 0,
    i = 0; //counters

  // setting the first tile

  var ul = {
    x: center_x,
    y: center_y,
  };

  var ur = {
    x: center_x + radius * Math.cos(halfSegment) * 0.865,
    y: center_y + radius * Math.sin(halfSegment) * 0.865,
  };

  var br = {
    x: center_x + radius * Math.cos(segment),
    y: center_y + radius * Math.sin(segment),
  };

  var bl = {
    x: center_x + radius * Math.cos(halfSegment + segment) * 0.865,
    y: center_y + radius * Math.sin(halfSegment + segment) * 0.865,
  };

  function getInt(p1, p2, t) {
    return {
      x: p1.x + (p2.x - p1.x) * t,
      y: p1.y + (p2.y - p1.y) * t,
    };
  }

  function center(points) {
    let c1x = (points[0].x + points[1].x + points[3].x) / 3;
    let c1y = (points[0].y + points[1].y + points[3].y) / 3;
    let c2x = (points[1].x + points[2].x + points[3].x) / 3;
    let c2y = (points[1].y + points[2].y + points[3].y) / 3;
    return {
      x: (c1x + c2x) / 2,
      y: (c1y + c2y) / 2,
    };
  }

  var vis = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + 100)
    .attr("height", height + 100);

  for (; i < segments; i++) {
    // loop six segments
    toggle = !toggle; // alter color each segment
    // loop quadrilateral grid 4x4 cells (5x5 lines exclusive)
    for (y = 0, yc = 0; y < 4; y++) {
      for (x = 0, xc = 0; x < 4; x++) {
        // for upper lines (ul-ur), get first row:
        var l1a = getInt(ul, bl, yc),
          l1b = getInt(ur, br, yc),
          l2a = getInt(ul, bl, yc + check),
          l2b = getInt(ur, br, yc + check),
          c1 = getInt(l1a, l1b, xc),
          c2 = getInt(l1a, l1b, xc + check),
          c3 = getInt(l2a, l2b, xc + check),
          c4 = getInt(l2a, l2b, xc);

        const poly = {
          points: [c1, c2, c3, c4],
          color: toggle ? "#baca44" : "#cafaa2",
          id: `${i}${x}${y}`,
          center: center([c1, c2, c3, c4]),
          rotation: i,
        };

        polygons.push(poly);

        toggle = !toggle;
        xc += check;
      }
      yc += check; // next segment line
      toggle = !toggle; // toggle per line as well
    }
  }
  vis
    .selectAll("polygon")
    .data(polygons)
    .enter()
    .append("polygon")
    .attr("points", function (d) {
      return d.points
        .map(function (d) {
          return [d.x, d.y].join(",");
        })
        .join(" ");
    })
    .style("fill", function (d) {
      return d.color;
    })
    .attr("id", function (d) {
      return d.id;
    })
    .attr("transform", function (d) {
      return `translate(${center_x},${center_y}) rotate(${60 * d.rotation}) translate(${-1 * center_x},${-1 * center_y})`;
    });

  vis
    .selectAll(".tile_ids")
    .data(polygons)
    .enter()
    .append("text")
    .attr("x", function (d) {
      return d.center.x - 10;
    })
    .attr("y", function (d) {
      return d.center.y;
    })
    .attr("transform", function (d) {
      return `translate(${center_x},${center_y}) rotate(${60 * d.rotation}) translate(${-1 * center_x},${-1 * center_y})`;
    })
    .attr("dy", ".35em")
    .text(function (d) {
      // return d.id;
      let nl = idtopos[`a${d.id}`];
      return `${nl.column}${nl.row}`;
    });

  vis
    .selectAll(".outer_labels")
    .data(labels)
    .enter()
    .append("text")
    .attr("x", function (d) {
      let poly = polygons.filter((polygon) => polygon.id == d.position)[0];
      return poly.center.x + d.tweaks_x;
    })
    .attr("y", function (d) {
      let poly = polygons.filter((polygon) => polygon.id == d.position)[0];
      return poly.center.y + d.tweaks_y;
    })
    .attr("transform", function (d) {
      let poly = polygons.filter((polygon) => polygon.id == d.position)[0];
      return `translate(${center_x},${center_y}) rotate(${60 * poly.rotation}) translate(${-1 * center_x},${-1 * center_y})`;
    })
    .attr("dy", ".35em")
    .text(function (d) {
      return d.letter;
    });
}
