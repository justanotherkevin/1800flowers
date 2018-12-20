import React, { Component } from 'react';
import { MyContext } from '../../Provider';
import PropTypes from 'prop-types';

export default class Users extends Component {
  render() {
    return (
      <div className="users-wrapper row">
        <MyContext.Consumer>
          {context =>
            context.users.map(user => (
              <div className="user-container col-lg-4 p-4" key={user.id}>
                <img src="" alt="" className="rounded-circle mb-5" />
                <p>First Name: {user.first}</p>
                <p>Last Name: {user.last}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => context.selectUser(user)}
                >
                  view details
                </button>
              </div>
            ))
          }
        </MyContext.Consumer>
      </div>
    );
  }
}
