import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserSample extends Component {
  render() {
    const { user, selectUser } = this.props;
    return (
      <div className="user-container col-lg-4 p-4" key={user.id}>
        <img src="" alt="" className="rounded-circle mb-5" />
        <p>First Name: {user.first}</p>
        <p>Last Name: {user.last}</p>
        <button className="btn btn-primary" onClick={() => selectUser(user)}>
          view details
        </button>
      </div>
    );
  }
}

UserSample.propTypes = {
  user: PropTypes.object.isRequired,
  selectUser: PropTypes.func.isRequired
};
