import React, { Component } from 'react';
import { MyContext } from '../../Provider';
import UserDetailed from './UserDetailed';

export default class User extends Component {
  render() {
    return (
      <div className="user-details-wrapper row">
        <MyContext.Consumer>
          {context => {
            const user = context.selectedUser;
            if (user != null) {
              return <UserDetailed user={user} />;
            }
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}
