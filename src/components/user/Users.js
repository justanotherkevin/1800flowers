import React, { Component } from 'react';
import { MyContext } from '../../Provider';
import UserSample from './UserSample';

export default class Users extends Component {
  render() {
    return (
      <div className="users-wrapper row">
        <MyContext.Consumer>
          {context =>
            context.users.map(user => (
              <UserSample
                key={user.id}
                user={user}
                selectUser={context.selectUser}
              />
            ))
          }
        </MyContext.Consumer>
      </div>
    );
  }
}
