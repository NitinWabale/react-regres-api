import Login from "./login";
import  reducers  from "../../reducers/login";
import sagas from "../../saga/login";
import * as actions from "../../actions/login";
import * as constants from "./constants";

export default {
    Login,
    reducers,
    sagas,
    actions,
    constants,
};