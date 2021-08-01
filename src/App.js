import React, { setState } from "react";
import styled, { css } from "styled-components";
import { DraggablePiece, BluePieces, GreenPieces } from "./pieces";

const Form = styled.div`
  position: absolute;
`;

export function getIndexPieceMap() {
    var map = new Map();
    map.set(0, GreenPieces.rook)
    map.set(1, GreenPieces.knight)
    map.set(2, GreenPieces.bishop)
    map.set(3, GreenPieces.queen)
    map.set(4, GreenPieces.king)
    map.set(5, GreenPieces.bishop)
    map.set(6, GreenPieces.knight)
    map.set(7, GreenPieces.rook)
    map.set(8, GreenPieces.pawn)
    map.set(9, GreenPieces.pawn)
    map.set(10, GreenPieces.pawn)
    map.set(11, GreenPieces.pawn)
    map.set(12, GreenPieces.pawn)
    map.set(13, GreenPieces.pawn)
    map.set(14, GreenPieces.pawn)
    map.set(15, GreenPieces.pawn)

    map.set(63, BluePieces.rook)
    map.set(62, BluePieces.knight)
    map.set(61, BluePieces.bishop)
    map.set(60, BluePieces.king)
    map.set(59, BluePieces.queen)
    map.set(58, BluePieces.bishop)
    map.set(57, BluePieces.knight)
    map.set(56, BluePieces.rook)
    map.set(55, BluePieces.pawn)
    map.set(54, BluePieces.pawn)
    map.set(53, BluePieces.pawn)
    map.set(52, BluePieces.pawn)
    map.set(51, BluePieces.pawn)
    map.set(50, BluePieces.pawn)
    map.set(49, BluePieces.pawn)
    map.set(48, BluePieces.pawn)
    return map;
}

const Board = styled.div`
  border-style: solid;
  border-color: black;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 500px;
  height: 500px;
  margin: auto;
`;

const Square = styled.div`
  background-color: white;
  width: 12.5%;
  height: 12.5%;
  position: relative;
  ${(props) =>
    props.Black &&
    css`
      background-color: black;
    `}
`;

export function renderSquare(i) {
  let isBlack =
    (Math.floor(i / 8) % 2 == 0 && i % 2 == 0) ||
    (Math.floor(i / 8) % 2 == 1 && i % 2 == 1);

  const indexPieceMap = getIndexPieceMap();
  if (isBlack) {
      if (indexPieceMap.has(i)) {
          return (<Square id={i}>
              <DraggablePiece piece={indexPieceMap.get(i)}></DraggablePiece>
          </Square>)
      }
    return <Square id={i}></Square>;
  }
  if (indexPieceMap.has(i)) {
    return (<Square Black id={i}>
        <DraggablePiece piece={indexPieceMap.get(i)}></DraggablePiece>
    </Square>)
}
  return <Square Black id={i}></Square>;
}

export function renderSquares() {
  let items = Array();
  for (let i = 0; i < 64; i++) {
    items.push(renderSquare(i));
  }
  return items;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clock: new Date(300000) };
  }
  render() {
    return <div>It is {this.state.clock.getMinutes()}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.items = renderSquares();
  }

  componentDidMount() {
      console.log(this.items[0]);
  }

  render() {
    return (
      <Form>
        <Board>{this.items}</Board>
      </Form>
    );
  }
}

export default App;
/*
This is a default export. This means that, when importing, we must import like...

import App from "./App";

If this were a named export, i.e.:

export const App = () = {
    do something...
}

then we could import like...

import { App } from "./App";
*/
