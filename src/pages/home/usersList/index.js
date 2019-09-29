import UsersList from "./usersList";
import reducers from "../../../reducers/userList";
import sagas from "../../../saga/userList";
import * as actions from "../../..//actions/userList";
import * as constants from "./constants";

export default {
    UsersList,
    reducers,
    sagas,
    actions,
    constants,
};