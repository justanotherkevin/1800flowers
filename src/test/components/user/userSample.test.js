import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserSample from '../../../components/user/UserSample';
import UserDetailed from '../../../components/user/UserDetailed';
import App from '../../../App';

configure({ adapter: new Adapter() });

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
describe('for <SampleUser /> component', () => {
  it('renders correctly', () => {
    let tree = renderer
      .create(<UserSample user={testUser} selectUser={testFunction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('update store to show selected user', () => {
  //   const app = shallow(<App />);
  //   app.find('users-wrapper')[0].find('button').simulate('click');
  //   app.update();
  //   expect(app.find('.user-details-wrapper'));
  // });
});

describe('for <UserDetailed /> component', () => {
  it('renders correctly for UserDetailed component', () => {
    let tree = renderer.create(<UserDetailed user={testUser} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
