import * as constants from '../pages/add/constants';

export const set = (first_name, last_name, avatar) => ({
  type: constants.SET,
  payload: {
    first_name: first_name,
    last_name: last_name,
    avatar: avatar,
  },
});
export const failure = (isFaild, msg) => ({
  type: constants.FAILURE,
  payload: {
    failure: isFaild,
    message: msg,
  },
});
export const loading = isLoading => ({
  type: constants.LOADING,
  payload: {
    loading: isLoading,
  },
});
