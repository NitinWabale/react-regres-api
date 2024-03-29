import * as constants from "../pages/edit/constants";

export const set = data => ({
  type: constants.SET,
  payload: {
    user: data
  }
});
export const update = (id, first_name, last_name, avatar) => ({
  type: constants.UPDATE,
  payload: {
    id: id,
    first_name: first_name,
    last_name: last_name,
    avatar: avatar
  }
});
export const get = id => ({
  type: constants.GET,
  payload: {
    id
  }
});
export const failure = (isFaild, msg) => ({
  type: constants.FAILURE,
  payload: {
    failure: isFaild,
    message: msg
  }
});
export const loading = isLoading => ({
  type: constants.LOADING,
  payload: {
    loading: isLoading
  }
});
