import numReducer from "./reducers/numReducer";
import editStatusReducer from "./reducers/editReducer";

const redux = require("redux");

//! Chia tác reducers
const allReducers = redux.combineReducers({
  num: numReducer,
  editStatus: editStatusReducer,
});

let store1 = redux.createStore(allReducers);
store1.subscribe(() => {
  //* Hàm subscribe dùng để lắng nghe mỗi khi state thay đổi
  console.log(store1.getState());
});

store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
store1.dispatch({
  type: "ADD_NEW",
  newItem: "Tai nghe",
});
store1.dispatch({
  type: "DELETE",
  index: 0,
});

export default store1;
