class Piece {
  constructor(col, row, type, team) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.column = col;
    this.row = row;
    this.type = type;
    this.team = team;
  }
}

class Team {
  constructor(team) {
    this.totalmoves = 0;
    if (team == "red") {
      this.live_pieces = [
        new Piece("A", "1", "rook", team),
        new Piece("B", "1", "knight", team),
        new Piece("C", "1", "bishop", team),
        new Piece("D", "1", "queen", team),
        new Piece("E", "1", "king", team),
        new Piece("F", "1", "bishop", team),
        new Piece("G", "1", "knight", team),
        new Piece("H", "1", "rook", team),
        new Piece("A", "2", "pawn", team),
        new Piece("B", "2", "pawn", team),
        new Piece("C", "2", "pawn", team),
        new Piece("D", "2", "pawn", team),
        new Piece("E", "2", "pawn", team),
        new Piece("F", "2", "pawn", team),
        new Piece("G", "2", "pawn", team),
        new Piece("H", "2", "pawn", team),
      ];
      this.dead_pieces = [];
    }
    if (team == "blue") {
      this.live_pieces = [
        new Piece("A", "8", "rook", team),
        new Piece("B", "8", "knight", team),
        new Piece("C", "8", "bishop", team),
        new Piece("D", "8", "queen", team),
        new Piece("I", "8", "king", team),
        new Piece("J", "8", "bishop", team),
        new Piece("K", "8", "knight", team),
        new Piece("L", "8", "rook", team),
        new Piece("A", "7", "pawn", team),
        new Piece("B", "7", "pawn", team),
        new Piece("C", "7", "pawn", team),
        new Piece("D", "7", "pawn", team),
        new Piece("I", "7", "pawn", team),
        new Piece("J", "7", "pawn", team),
        new Piece("K", "7", "pawn", team),
        new Piece("L", "7", "pawn", team),
      ];
      this.dead_pieces = [];
    }
    if (team == "black") {
      this.live_pieces = [
        new Piece("H", "12", "rook", team),
        new Piece("G", "12", "knight", team),
        new Piece("F", "12", "bishop", team),
        new Piece("E", "12", "queen", team),
        new Piece("I", "12", "king", team),
        new Piece("J", "12", "bishop", team),
        new Piece("K", "12", "knight", team),
        new Piece("L", "12", "rook", team),
        new Piece("H", "11", "pawn", team),
        new Piece("G", "11", "pawn", team),
        new Piece("F", "11", "pawn", team),
        new Piece("E", "11", "pawn", team),
        new Piece("I", "11", "pawn", team),
        new Piece("J", "11", "pawn", team),
        new Piece("K", "11", "pawn", team),
        new Piece("L", "11", "pawn", team),
      ];
      this.dead_pieces = [];
    }
  }
}

class Game {
  constructor() {
    this.teamred = new Team("red");
    this.teamblue = new Team("blue");
    this.teamblack = new Team("black");
    this.map = {};
    for (let p in this.teamred.live_pieces) {
      let piece = this.teamred.live_pieces[p];
      this.map[`${piece.column}${piece.row}`] = piece;
    }
    for (let p in this.teamblue.live_pieces) {
      let piece = this.teamblue.live_pieces[p];
      this.map[`${piece.column}${piece.row}`] = piece;
    }
    for (let p in this.teamblack.live_pieces) {
      let piece = this.teamblack.live_pieces[p];
      this.map[`${piece.column}${piece.row}`] = piece;
    }
  }
}

var polygons = [];

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

function drawBoard(game) {
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
          color: toggle ? "#919191" : "#d1d1d1",
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
    .style("fill", function (d) {
      let nl = idtopos[`a${d.id}`];
      let symbol = game.map[`${nl.column}${nl.row}`];
      if (symbol) {
        return colorMap[symbol.team];
      } else {
        return "#bababa";
      }
    })
    .attr("transform", function (d) {
      return `translate(${center_x},${center_y}) rotate(${60 * d.rotation}) translate(${-1 * center_x},${-1 * center_y})`;
    })
    .attr("dy", ".75em")
    .text(function (d) {
      // return d.id;
      let nl = idtopos[`a${d.id}`];
      let symbol = game.map[`${nl.column}${nl.row}`];
      if (symbol) {
        return symbol.type.substring(0, 1).toUpperCase();
      } else {
        return `${nl.column}${nl.row}`;
      }
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

function loader() {
  game = new Game();
  drawBoard(game);
}
