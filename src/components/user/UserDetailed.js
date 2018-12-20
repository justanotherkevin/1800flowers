import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserDetailed extends Component {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className="user-details col-md-7">
          <h3>{user.description}</h3>
          <p>
            {user.first} {user.last}
          </p>
          <p>Age {user.age}</p>
          <p>Location {user.location}</p>
        </div>
        <div className="user-img col-md-5">
          <img className="img-fluid mx-auto" src="" alt="" />
        </div>
      </React.Fragment>
    );
  }
}

UserDetailed.propTypes = {
  user: PropTypes.object.isRequired
};
