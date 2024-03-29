import React, { Component } from "react";
import UserLoading from "../../../components/userLoading";
import * as actions from "../../../actions/userList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Row, Avatar, UserInfo, Text, AddUser } from "./styles";
import PropTypes from "prop-types";

export class UsersList extends Component {
  componentDidMount() {
    // only call Api request if stored data is not completed
    if (this.props.total_pages >= this.props.next_page) {
      this.request();
    }
  }

  handleLoadMore = e => {
    e.preventDefault();
    //add new data
    this.request();
  };
  request = () => {
    this.props.get("&page=" + this.props.next_page);
  };

  handleDelete = (id, e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      this.props.deleteItem(id);
    }
  };

  renderForm = (items = []) => {
    return items.map((item, index) => {
      return (
        <Row key={index} id={item.id}>
          <Avatar>
            <img src={item.avatar} alt={item.first_name} />
          </Avatar>
          <UserInfo>
          <UserInfo>
            <Text color={"firstname"} className='firstname'>{`${item.first_name}  ${item.last_name}`}</Text>
            <Text color={"id"}  className='id'>{item.id}</Text>
          </UserInfo>
          </UserInfo>
          <button
            className="btn delete"
            onClick={e => this.handleDelete(item.id, e)}
          >
            Delete
          </button>
          <NavLink exact to={`/user/${item.id}/edit`} className="btn edit">
            Edit
          </NavLink>
        </Row>
      );
    });
  };
  render() {
    const { data, loading, next_page, total_pages, failure } = this.props;
    return (
      <>
        { !loading && (
          <>
          <h2>User Accounts</h2>
          <AddUser>
            <NavLink exact to="/add" className="btn add">
              Create New
            </NavLink>
          </AddUser>
          </>
        )}
        {this.renderForm(data)}
        <UserLoading isLoading={loading} />
        <div style={{ textAlign: "center", margin: "20px" }}>
          {total_pages >= next_page && !loading && (
            <button className="btn load_more" onClick={this.handleLoadMore}>
              Load more...
            </button>
          )}
          {failure && !loading && (
            <button className="btn try_again" onClick={this.handleLoadMore}>
              Try again
            </button>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.usersList.loading,
  failure: state.usersList.failure,
  data: state.usersList.data,
  next_page: state.usersList.next_page,
  total_pages: state.usersList.total_pages
});
const mapDispatchToProps = dispatch => {
  const { get, deleteItem } = actions;
  return bindActionCreators({ get, deleteItem }, dispatch);
};
UsersList.propTypes = {
  loading: PropTypes.bool,
  failure: PropTypes.bool,
  data: PropTypes.array,
  next_page: PropTypes.number,
  total_pages: PropTypes.number,
  get: PropTypes.func,
  deleteItem: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
