import React from 'react';
import './QnABlogPage.css';

const BlogQA = () => {
    return (
        <div className="cont">
            <h2 className='mb-5'>Common Questions: </h2>
            <div className="ques">
                <h3>Question: What is the difference between Props and state</h3>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Answer: </span> In React, props and state are both used to manage data. But there are some difference between them
                    <br /> 
                    <span style={{ fontWeight: 'bold' }}>Props: </span>Props is short form of "properties". It is used to pass data from one component to another component.
                    They can only be updated by the parent component. <br />
                    <span style={{ fontWeight: 'bold' }}>State: </span> State is used to manage data within a component. State can be modified by the component that owns it.
                </p>
            </div>
            <div className="ques">
                <h3>Question: How does useState work?</h3>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Answer: </span> UseState is React Hook. It allows us to add state to a functional component. It returns an array with two values- the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
                </p>
            </div>
            <div className="ques">
                <h3>Question: What is the purpose of useEffect other than fetching data?</h3>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Answer: </span> In react JS The useEffect allows us to perform side effects in our components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                </p>
            </div>
            <div className="ques">
                <h3>Question: How Does React work?</h3>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Answer: </span> React JS divides the UI
                    into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called
                    properties or props. It is possible to have as many components as necessary
                    without cluttering code.
                </p>
            </div>
        </div>
    );
};

export default BlogQA;
