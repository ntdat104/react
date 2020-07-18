import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import News from "./components/News";
import { connect } from "react-redux";

class App extends Component {
  //* this.props.num
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.props.num}
        <News />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    num: state.num,
  };
};

export default connect(mapStateToProps)(App);

//! npm install redux --save
//! npm install react-redux --save

// //! Sử dụng toán tử 3 chấm
// //* Object
// let p1 = {
//   name: "Màn hình",
//   price: 90,
// };
// console.log(p1);
// let p2 = { ...p1 };
// p2.price = 100;
// console.log(p2);
// console.log(p1);

// //* Array
// let a1 = [3, 5, 6, 7];
// let a2 = [...a1];
// console.log(a1);
// a2[0] = 100;
// console.log(a2);
// console.log(a1);

// //* Ghi đè
// let b1 = {
//   num: [34, 56, 23],
//   status: true,
// };
// let b2 = { ...b1, status: false };
// console.log(b1);
// console.log(b2);
// let b3 = {
//   ...b1,
//   num: [...b1.num, 100],
// };
// console.log(b3);

//! Cấu trúc cơ bản redux
// let redux = require("redux");
// let oldState = {
//   num: ["Màn hình", "Chuột", "Bàn phím"],
//   editStatus: true,
// };
// let reducer1 = (state = oldState, action) => {
//   switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//       return { ...state, editStatus: !state.editStatus };
//       break;
//     case "ADD_NEW":
//       return { ...state, num: [...state.num, action.newItem] };
//       break;
//     case "DELETE":
//       return {
//         ...state,
//         num: state.num.filter((value, index) => index !== action.index),
//       };
//       break;
//     default:
//       return state;
//       break;
//   }
// };
// let store1 = redux.createStore(reducer1);
// store1.subscribe(() => {
//   //* Hàm subscribe dùng để lắng nghe mỗi khi state thay đổi
//   console.log(store1.getState());
// });

// store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
// store1.dispatch({
//   type: "ADD_NEW",
//   newItem: "Tai nghe",
// });
// store1.dispatch({
//   type: "DELETE",
//   index: 0,
// });
