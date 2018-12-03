import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../components/page.js';

describe("<Page/>", () => {
    
  it('renders without crashing', () => {
    const content = [ { deckTitle: 'deckTitle', records: [ { title: 'title', copy: 'copy', media: { alt: 'alt', title: 'title', href: 'href' }, links: [ { type: 'type', title: 'title', href: 'href' } ] } ] } ];
    const div = document.createElement('div');
    ReactDOM.render(<Page content={content}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
