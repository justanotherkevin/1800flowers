import React, { Component } from 'react';
import { MyContext } from '../../Provider';
import UserSample from './UserSample';

export default class Users extends Component {
  render() {
    return (
      <div className="users-wrapper">
        <ul>
          <MyContext.Consumer>
            {context =>
              context.users.map(user => (
                <li key={user.id}>
                  <UserSample user={user} selectUser={context.selectUser} />
                </li>
              ))
            }
          </MyContext.Consumer>
        </ul>
      </div>
    );
  }
}
