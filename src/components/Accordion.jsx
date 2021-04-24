
import React from 'react';




const Accordion = ({ title, active, setActive }) => {
    return(
        <div className="container">
            
        <div className= "accordion">
            <div className="accordionHeading">
                <div className="container">
                    <p>{title}</p>
                    <span onClick={() => setActive("title")}>
                        {active === title ? "X" : "|||"}
                    </span>
                </div>
            </div>
            <div className= {(active === title ? "show" : "") + "accordionContent"}>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid quam deserunt ad vero eos explicabo id quis ratione voluptates, illo accusantium possimus fugiat, excepturi, magnam non natus cumque pariatur!
                    Iure soluta eligendi architecto, expedita adipisci delectus sed laboriosam id aut, rem minus dicta vitae distinctio ullam excepturi, beatae minima numquam esse tenetur possimus illum? Sint nisi dolore quod perspiciatis!
                    Dignissimos id quos labore fuga sint blanditiis nemo nesciunt rerum magnam ipsa perspiciatis esse aspernatur minima iusto officia tempore excepturi cumque itaque ullam, mollitia optio non dolore. Fugit, in odio.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Accordion;