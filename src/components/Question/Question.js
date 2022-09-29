import React from 'react';
import "./Question.css"
const Question = () => {
  return (
		<div className='question-container'>
			<div>
				<h2><span>Q1.</span> How does React works ?</h2>
				<p>
					ReactJS divides the UI into isolated reusable pieces of code known as
					components. React components work similarly to JavaScript functions as
					they accept arbitrary inputs called properties or props. It's possible
					to have as many components as necessary without cluttering your code.
				</p>
			</div>
			<div>
				<h2><span>Q2.</span> Difference between props and state</h2>
				<p>
					Props are used to pass data from one component to another. The state
					is a local data storage that is local to the component only and cannot
					be passed to other components.
				</p>
			</div>
			<div>
				<h2><span>Q3.</span> What works useEffect without data load</h2>
				<p>
					The useEffect hook is the Swiss Army knife of all the hooks. It’s the
					solution to many problems: how to fetch data when a component mounts,
					how to run code when state changes or when a prop changes, how to set
					up timers or intervals, you name it.
				</p>
			</div>
		</div>
	);
};

export default Question;
