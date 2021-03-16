class Piece {
  constructor(col, row, type, team) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.column = col;
    this.row = row;
    this.type = type;
    this.team = team;
    this.moved = false;
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

  move(startpos, endpos) {
    let r1 = [1, 2, 3, 4, 5, 6, 7, 8];
    let r2 = [1, 2, 3, 4, 9, 10, 11, 12];
    let r3 = [8, 7, 6, 5, 9, 10, 11, 12];
    let rows = [r1, r2, r3];
    let c1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let c2 = ["A", "B", "C", "D", "I", "J", "K", "L"];
    let c3 = ["H", "G", "F", "E", "I", "J", "K", "L"];
    let cols = [c1, c2, c3];
    let startPiece = this.map[startpos];
    let endPiece = this.map[endpos];

    //movement rule: make sure that the end position exists
    let validspots = [];
    for (let o in idtopos) {
      validspots.push(`${idtopos[o]["column"]}${idtopos[o]["row"]}`);
    }
    if (!validspots.includes(endpos)) {
      console.log("cannot move: end position isn't real");
      return;
    }

    //movement rule: ensure there is a piece on the start square
    if (!startPiece) {
      console.log("cannot move: start square blank");
      return;
    }

    //movement rule: the piece has to move somewhere
    if (startpos == endpos) {
      console.log("cannot move: start and end positions are the same");
      return;
    }

    //movement rule: ensure there is either a piece from another team or no piece on the end square
    if (endPiece) {
      if (startPiece.team == endPiece.team) {
        console.log(
          "cannot move: moving to a square occupied by a piece of the same team"
        );
        return;
      }
    }

    let start_column = startpos.substring(0, 1);
    let start_row = Number(startpos.substring(1, 2));
    let end_column = endpos.substring(0, 1);
    let end_row = Number(endpos.substring(1, 2));

    //movement rule: ensure it is a valid movement for that piece type
    if (startPiece.type == "pawn") {
      // pawns can only move forward 1 (forward 2 if first turn) or diagonal one to capture
      // pawns need to move towards an enemy's base
      let possible = false;
      if (start_column === end_column) {
        // if the start and end column are the same and
        possible = true;
      }
    }

    if (startPiece.type == "rook") {
      // rooks can move either along their row or along their column
      // they cannot jump over other pieces
      if (start_column != end_column && start_row != end_row) {
        console.log(
          "cannot move: for the rook both the column and row does not match"
        );
        return;
      }
      if (start_column == end_column) {
        // find the rowset that both the start and end position are in and confirm that
        // there are no pieces in between the start and end!
        for (let row = 0; row < rows.length; row++) {
          if (rows[row].includes(start_row) && rows[row].includes(end_row)) {
            let starter =
              Math.min(
                rows[row].indexOf(start_row),
                rows[row].indexOf(end_row)
              ) + 1;
            let ender =
              Math.max(
                rows[row].indexOf(start_row),
                rows[row].indexOf(end_row)
              ) - 1;
            let iterarray = Array.from(
              { length: ender - starter },
              (_, i) => i + starter
            );
            for (let ele; ele < iterarray.length; ele++) {
              let cur = rows[row][iterrarray[ele]];
              if (this.map[`${start_column}${cur}`]) {
                console.log("cannot move: one of the squares is occupied!");
                return;
              }
            }
          }
        }
      } else if (start_row == end_row) {
        // find the rowset that both the start and end position are in and confirm that
        // there are no pieces in between the start and end!
        // castling
        for (let col = 0; col < cols.length; col++) {
          if (cols[col].includes(start_col) && cols[col].includes(end_col)) {
            let starter =
              Math.min(
                cols[col].indexOf(start_col),
                cols[col].indexOf(end_col)
              ) + 1;
            let ender =
              Math.max(
                cols[col].indexOf(start_col),
                cols[col].indexOf(end_col)
              ) - 1;
            let iterarray = Array.from(
              { length: ender - starter },
              (_, i) => i + starter
            );
            for (let ele; ele < iterarray.length; ele++) {
              let cur = cols[col][iterrarray[ele]];
              if (this.map[`${cur}${start_row}`]) {
                console.log("cannot move: one of the squares is occupied!");
                return;
              }
            }
          }
        }
      } else {
        console.log(
          "cannot move: neither the rows nor the columns lined up. This code should be unreachable!"
        );
      }
    }

    if (startPiece.type == "knight") {
      // knights can move along L shapes! that is any 1 row move, 2 column move or 2 row move, 1 column move
      for (let row = 0; row < rows.length; row++) {
        if (rows[row].includes(start_row) && rows[row].includes(end_row)) {
          for (let col = 0; col < cols.length; col++) {
            if (cols[col].includes(start_col) && cols[col].includes(end_col)) {
              if (
                Math.abs(
                  rows[row].indexOf(start_row) - rows[row].indexOf(end_row)
                ) == 2 &&
                Math.abs(
                  cols[col].indexOf(start_col) - cols[col].indexOf(end_col)
                ) == 1
              ) {
                // valid move
                console.log("correct move");
              }
              if (
                Math.abs(
                  rows[row].indexOf(start_row) - rows[row].indexOf(end_row)
                ) == 1 &&
                Math.abs(
                  cols[col].indexOf(start_col) - cols[col].indexOf(end_col)
                ) == 2
              ) {
                // valid move
                console.log("correct move");
              }
            }
          }
        }
      }
    }

    if (startPiece.type == "bishop") {
      // bishops move diagonal, that's it, thank god

      for (let row = 0; row < rows.length; row++) {
        if (rows[row].includes(start_row) && rows[row].includes(end_row)) {
          for (let col = 0; col < cols.length; col++) {
            if (cols[col].includes(start_col) && cols[col].includes(end_col)) {
              if (
                Math.abs(
                  rows[row].indexOf(start_row) - rows[row].indexOf(end_row)
                ) ==
                Math.abs(
                  cols[col].indexOf(start_col) - cols[col].indexOf(end_col)
                )
              ) {
                let starter_cols =
                  Math.min(
                    cols[col].indexOf(start_col),
                    cols[col].indexOf(end_col)
                  ) + 1;
                let ender_cols =
                  Math.max(
                    cols[col].indexOf(start_col),
                    cols[col].indexOf(end_col)
                  ) - 1;

                let starter_rows =
                  Math.min(
                    cols[col].indexOf(start_col),
                    cols[col].indexOf(end_col)
                  ) + 1;
                let ender_rows =
                  Math.max(
                    cols[col].indexOf(start_col),
                    cols[col].indexOf(end_col)
                  ) - 1;

                let iterarray_cols = Array.from(
                  { length: ender_cols - starter_cols },
                  (_, i) => i + starter_cols
                );
                let iterarray_rows = Array.from(
                  { length: ender_rows - starter_rows },
                  (_, i) => i + starter_rows
                );
                for (let ele; ele < iterarray_cols.length; ele++) {
                  let cur_col = cols[col][iterarray_cols[ele]];
                  let cur_row = rows[row][iterarray_rows[ele]];
                  if (this.map[`${cur_col}${cur_row}`]) {
                    console.log("cannot move: one of the squares is occupied!");
                    return;
                  }
                }
              }
            }
          }
        }
      }
      console.log(
        "cannot move: no valid row, column combination such that the move was truly diagonal"
      );
    }

    if (startPiece.type == "queen") {
    }

    if (startPiece.type == "king") {
      // one step in any direction
      // cannot move into check
      for (let row = 0; row < rows.length; row++) {
        if (rows[row].includes(start_row) && rows[row].includes(end_row)) {
          for (let col = 0; col < cols.length; col++) {
            if (cols[col].includes(start_col) && cols[col].includes(end_col)) {
              if (
                Math.abs(
                  rows[row].indexOf(start_row) - rows[row].indexOf(end_row)
                ) == 1 &&
                Math.abs(
                  cols[col].indexOf(start_col) - cols[col].indexOf(end_col)
                ) == 0
              ) {
                // valid move
                console.log("correct move");
              } else if (
                Math.abs(
                  rows[row].indexOf(start_row) - rows[row].indexOf(end_row)
                ) == 0 &&
                Math.abs(
                  cols[col].indexOf(start_col) - cols[col].indexOf(end_col)
                ) == 1
              ) {
                // valid move
                console.log("correct move");
              } else if (
                Math.abs(
                  rows[row].indexOf(start_row) - rows[row].indexOf(end_row)
                ) == 1 &&
                Math.abs(
                  cols[col].indexOf(start_col) - cols[col].indexOf(end_col)
                ) == 1
              ) {
                // valid move
                console.log("correct move");
              } else {
                console.log(
                  "cannot move: you are trying to move your king more than one row and/or one column"
                );
              }
            }
          }
        }
      }
    }

    console.log(startpos, this.map[startpos]);
    console.log(endpos, this.map[endpos]);
  }
}

var polygons = [];

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

function clickHandler(curgame) {
  var startpos = document.getElementById("startpos").value;
  var endpos = document.getElementById("endpos").value;
  curgame.move(startpos, endpos);
}

function loader() {
  game = new Game();
  drawBoard(game);
  document
    .getElementById("movebtn")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
}
