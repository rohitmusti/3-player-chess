## 3 Person Chess

I've always wanted to explore three person chess but have never bought a board (they're a bit expensive and take up a lot of space). Instead of investing in a physical one, I thought I'd try and make a digital one! Here is the example [ruleset](https://greenchess.net/rules.php?v=three-player).

## Minimum Viable Game

[x] create pieces class

[x] create board class

[x] visualize board

[x] label squares

[x] initiate board with correct pieces on correct squares

[ ] define piece movement

- determine whether other pieces are in the way

- rules about taking other people's pieces vs your own pieces

[ ] create rules for taking pieces

[ ] create system for taking turns

- you can't move other teams piece on your turn

- you can't enter invalid movement strings to text field (regex)

- if someone is eliminated, skip their turn

[ ] implement empassant

[ ] implement castling

[ ] define rules about pawns reaching another teams "base"

[ ] define rules about what happens to the dead teams pieces (are they removed? do you assume control of them? do they stay on and can be taken like regular pieces?)

[ ] define rules about how you can move when you are in check

## Extras

[ ] move this from vanilla js to react

[ ] make a commandline version

[ ] create system so that you can connect multiple computers to same game

[ ] create system for being able to play multiple games at once

- this will probably start out as a link system

[ ] create way of showing what moves are available to a given piece

[ ] create drag and drop method of moving pieces

[ ] make this usable on mobile

[ ] create a leaderboard

- keep link system, maybe just allow people to define a username they want to use

- we could also make this a full blown account system

[ ] in game chat system
