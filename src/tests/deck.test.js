import React from 'react';
import ReactDOM from 'react-dom';
import Deck from '../components/deck.js';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Deck/>", () => {

  it('renders without crashing', () => {
    const deck = { deckTitle: 'deckTitle', records: [ { title: 'title', copy: 'copy', media: { alt: 'alt', title: 'title', href: 'href' }, links: [ { type: 'type', title: 'title', href: 'href' } ] } ] };
    const id = 'id';
    const div = document.createElement('div');
    ReactDOM.render(<Deck deck={deck} id={id}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("is alive at application start", () => {
    const deck = { deckTitle: 'deckTitle', records: [ { title: 'title', copy: 'copy', media: { alt: 'alt', title: 'title', href: 'href' }, links: [ { type: 'type', title: 'title', href: 'href' } ] } ] };
    const id = 'id';
    let app = shallow(<Deck deck={deck} id={id}/>);
    expect(app.find("header").exists()).toBeTruthy();
  });

});
