import { combineReducers } from "redux";
const showLoadingReducer = (
  state = {
    show: false,
    message: "",
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "SET_SHOW_LOADING":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
const userInfoReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER_INFO":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  showLoading: showLoadingReducer,
  userInfo: userInfoReducer,
});
