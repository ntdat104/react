import React, { Component } from "react";

//* Sử dụng từ khóa props trong REACT

//! Cách 1
function Compo1(props) {
  //! khai báo bằng function thì ko có this
  return (
    <div>
      <h4>{props.title}</h4>
    </div>
  );
}

//! Cách 2
class Compo2 extends Component {
  //! khai báo bằng class thì phải có this
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

class Lession2 extends Component {
  render() {
    return <div>
        <Compo1 title="Compo1" />
        <Compo2 title="Compo2" />
    </div>;
  }
}

export default Lession2;
