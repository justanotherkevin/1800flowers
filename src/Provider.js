import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    selectedUser: null,
    users: [
      {
        id: 1,
        first: 'John',
        last: 'Roberts',
        age: 51,
        location: 'Chicago, IL',
        description: 'John is a retired YouTuber'
      },
      {
        id: 2,
        first: 'Frita',
        last: 'Waters',
        age: 27,
        location: 'Phoenix, AZ',
        description: 'Frita loves the desert, cheese, and turtles.'
      },
      {
        id: 3,
        first: 'Bart',
        last: 'Simpson',
        age: 24,
        location: 'Springfield, IL',
        description: 'Bart skateboards everywhere.'
      },
      {
        id: 4,
        first: 'John',
        last: 'Roberts',
        age: 51,
        location: 'Chicago, IL',
        description: 'John is a retired YouTuber'
      },
      {
        id: 5,
        first: 'Frita',
        last: 'Waters',
        age: 27,
        location: 'Phoenix, AZ',
        description: 'Frita loves the desert, cheese, and turtles.'
      },
      {
        id: 6,
        first: 'Bart',
        last: 'Simpson',
        age: 24,
        location: 'Springfield, IL',
        description: 'Bart skateboards everywhere.'
      },
      {
        id: 7,
        first: 'John',
        last: 'Roberts',
        age: 51,
        location: 'Chicago, IL',
        description: 'John is a retired YouTuber'
      },
      {
        id: 8,
        first: 'Frita',
        last: 'Waters',
        age: 27,
        location: 'Phoenix, AZ',
        description: 'Frita loves the desert, cheese, and turtles.'
      },
      {
        id: 9,
        first: 'Bart',
        last: 'Simpson',
        age: 24,
        location: 'Springfield, IL',
        description: 'Bart skateboards everywhere.'
      }
    ]
  };
  selectUser = user => {
    this.setState({ selectedUser: user });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          selectUser: this.selectUser
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
