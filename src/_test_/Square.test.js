import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import Square from '../component/Square';

describe('Square component test', () => {
 
    it('has an button tag', () => {
      const component = ReactTestUtils.renderIntoDocument(<Square value={null} onClick={null}/>);  
     
      var button = ReactTestUtils.findRenderedDOMComponentWithTag(
        component, 'button'
      );
    })
   
    it("is wrapped inside a 'square' class", () => {
      const component = ReactTestUtils.renderIntoDocument(<Square value={null} onClick={null}/>);  
     
      var button = ReactTestUtils.findRenderedDOMComponentWithClass(
        component, 'square'
      );
    })
  })