
import { render } from '@testing-library/react';
import React from 'react';
import { NavItem } from 'react-bootstrap';
import {Data} from './Data';  


const Accordion = () => {
    const accordionData = {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    };
  
    const { title, content } = accordionData;
  
    return (
      <React.Fragment>
        <h1>React Accordion Demo</h1>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title">
              <div>{title}</div>
              <div>+</div>
            </div>
            <div className="accordion-content">{content}</div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Accordion;






// function Accordion() {
//     return(
//         <div>looo</div>
//     )
// } 
// export default Accordion;