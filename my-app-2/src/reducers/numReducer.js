const numInitialState = ["Màn hình", "Chuột", "Bàn phím"];
const numReducer = (state = numInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.newItem];
    case "DELETE":
      return [state.filter((value, index) => index !== action.index)];
    default:
      return state;
  }
};

export default numReducer