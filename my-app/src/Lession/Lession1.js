import React, { Component } from "react";

//* Các cách định nghĩa components.

//! Cách 1
function One() {
  return (
    <div>
      <h4>One</h4>
    </div>
  );
}

//! Cách 2
const Two = function () {
  //* anonymous function
  return (
    <div>
      <h4>Two</h4>
    </div>
  );
};

//! Cách 3
const Three = () => (
  <div>
    <h4>Three</h4>
  </div>
);

//! Cách 4
class Four extends Component {
  render() {
    return (
      <div>
        <h4>Four</h4>
      </div>
    );
  }
}

class Lession1 extends Component {
  render() {
    return <div>
        <One />
        <Two />
        <Three />
        <Four />
    </div>;
  }
}

export default Lession1;
