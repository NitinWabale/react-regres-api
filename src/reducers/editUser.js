import * as constants from "../pages/edit/constants";
const initial ={
    failure:false,
    loading:false,
    user : {}
}
function editReducer(state = initial, action) {
  switch (action.type) {
      case constants.SET:
          return { ...state, ...action.payload };
      case constants.FAILURE:
        return { ...state, ...action.payload };
      case constants.LOADING:
          return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default editReducer;
