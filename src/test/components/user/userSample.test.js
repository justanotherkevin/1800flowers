import React from 'react';
import renderer from 'react-test-renderer';
import UserSample from '../../../components/user/UserSample';
import User from '../../../components/user/User';

const testUser = {
  id: 1,
  first: 'John',
  last: 'Roberts',
  age: 51,
  location: 'Chicago, IL',
  description: 'John is a retired YouTuber'
};
const testFunction = () => {
  console.log('testfunction');
};

it('renders correctly for SampleUser component', () => {
  const tree = renderer
    .create(<UserSample user={testUser} selectUser={testFunction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
