import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/card.js';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Card/>", () => {

  it('renders without crashing', () => {
    const card = { title: 'title', copy: 'copy', media: { alt: 'alt', title: 'title', href: 'href' }, links: [ { type: 'type', title: 'title', href: 'href' } ] };
    const id = 'id';
    const div = document.createElement('div');
    ReactDOM.render(<Card card={card} id={id}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("is alive at application start", () => {
    const card = { title: 'title', copy: 'copy', media: { alt: 'alt', title: 'title', href: 'href' }, links: [ { type: 'type', title: 'title', href: 'href' } ] };
    const id = 'id';
    let app = shallow(<Card card={card} id={id}/>);
    expect(app.find("span").exists()).toBeTruthy();
  });

});
