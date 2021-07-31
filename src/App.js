import React, { setState } from "react";
import styled, { css } from "styled-components";
import { DraggablePiece, BlackPieces } from "./pieces";

const Form = styled.div`
  position: absolute;
`;

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
  if (isBlack) {
    return <Square id={i}></Square>;
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
        <DraggablePiece piece={BlackPieces.pawn}></DraggablePiece>
        <DraggablePiece piece={BlackPieces.rook}></DraggablePiece>
        <DraggablePiece piece={BlackPieces.bishop}></DraggablePiece>
        <DraggablePiece piece={BlackPieces.knight}></DraggablePiece>
      </Form>
    );
  }
}

export default App;
/*
<Board>
                {this.items}
            </Board>
This is a default export. This means that, when importing, we must import like...

import App from "./App";

If this were a named export, i.e.:

export const App = () = {
    do something...
}

then we could import like...

import { App } from "./App";
*/
