import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Header/>", () => {

  it('renders without crashing', () => {
    const title = 'title';
    const div = document.createElement('div');
    ReactDOM.render(<Header title={title}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("is alive at application start", () => {
    const title = 'title';
    let app = shallow(<Header title={title}/>);
    expect(app.find("nav").exists()).toBeTruthy();
  });

});
