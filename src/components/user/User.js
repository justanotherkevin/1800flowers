import React, { Component } from 'react';
import { MyContext } from '../../Provider';

export default class User extends Component {
  render() {
    return (
      <div className="user-details-wrapper row">
        <MyContext.Consumer>
          {context => {
            const user = context.selectedUser;
            if (user != null) {
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
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}
