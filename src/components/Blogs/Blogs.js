import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>this is blogs</h3>
            <div>
                <h2>What is context API?</h2>
                <p>Answer:- Context API is a way for a React app to effectively produce global variables that can be passed around. <br/> We can say it is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br/> Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h2>What is symentic tag</h2>
                <p>Answer:- Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. <br /> Elements such as header , footer and article are all considered semantic because they <br /> accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
            <div>
                <h2>Difference between inline element and enline block element.</h2>
                <h5>Inline</h5>
                <p>1. Inline elements can begin within a line of the HTML element and it never starts a new line for the HTML.</p>
                <p>2. The width is defined only till the tags of inline extends.</p>
                <p>3. Inlime elememts can break among the lines.</p>
                <h5>Block</h5>
                <p>1. Blocks can not begin a line of th HTML element and it always starts the new line of the HTML.</p>
                <p>2. The width is more than inline and is extendes till the parent element extends.</p>
                <p>3. Block elements can not break among the lines.</p>
            </div>
        </div>
    );
};

export default Blogs;