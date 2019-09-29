import Add from "./add";
import  reducers  from "../../reducers/addUser";
import sagas from "../../saga/addUser";
import * as actions from "../../actions/addUser";
import * as constants from "./constants";

export default {
    Add,
    reducers,
    sagas,
    actions,
    constants,
};