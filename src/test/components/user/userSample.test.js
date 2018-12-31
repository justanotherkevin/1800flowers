import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserSample from '../../../components/user/UserSample';
import UserDetailed from '../../../components/user/UserDetailed';
import App from '../../../App';
import Users from '../../../components/user/Users';

import MyProvider from '../../../Provider';

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
});

describe('for <UserDetailed /> component', () => {
  it('renders correctly for UserDetailed component', () => {
    let tree = renderer.create(<UserDetailed user={testUser} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('App as a whole', () => {
  it('On init render there are no selected user', () => {
    const app = shallow(<App />);
    const store = shallow(<MyProvider />);
    expect(store.state().selectedUser).toEqual(null);
    expect(app.find('.user-details').exists()).toEqual(false);
  });
  it('render user details component when btn clicked', () => {
    const app = mount(<App />);
    app
      .find('.sample-user-container button')
      .first()
      .simulate('click');

    app.update();

    expect(app.find('.user-details').exists()).toEqual(true);
  });
});
