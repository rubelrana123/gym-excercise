import React from 'react';

import "./Activities.css";

const Activities = ({ excercise, handlerCart }) => {
	// console.log(excercise);
	const { img, details, name, age ,time } = excercise;
	return (
		<div>
			
			<div className='activities-container'>
				<div className='myCart'>
					<img src={img} alt='imagecard' />
					<div className='card-info'>
						<h2>{name}</h2>
						<p>{details && details.slice(0, 85) + '...'}</p>
						<div className='cart-info'>
							<p>Age : {age}</p>
							<p>Time : {time}s</p>
						</div>
						<button onClick={() => handlerCart(excercise)}>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activities;