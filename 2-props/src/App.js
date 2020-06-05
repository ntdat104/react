import React, { Component } from 'react';
import './App.css';

//! Cách 1
function Compo(props) { //! khai báo bằng function thì ko có this
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

//! Cách 2
class Compo2 extends Component { //! khai báo bằng class thì phải có this
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Compo title="Đi chơi" />
        <Compo title="Đi chợ" />
        <Compo title="Đi học" />

        <Compo2 title="Máy bay" />
        <Compo2 title="Tàu hỏa" />
        <Compo2 title="Ô tô" />
      </div>
    );
  }
}

export default App;
