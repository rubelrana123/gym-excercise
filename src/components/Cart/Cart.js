import React, { useState } from 'react';
 import profile from "../../men.png"
 import "./Cart.css"
const Cart = ({ cart }) => {

	console.log(cart);

  let time = 0;
  for (const eachCart of cart) {
    time = time + eachCart.time
  }

    const [breaks, setBreaks] = useState([]);
  const handleBreak = (value) => {
    setBreaks(value);

  }
  console.log(breaks)
  
	return (
		<div className=''>
			{/* profile info */}
			<div className='profile-content'>
				<img src={profile} alt='' />
				<div className='profile-info'>
					<h1>Rubel Rana</h1>
					<p>
						<span>Dinajpur,Rangpur</span>
					</p>
				</div>
			</div>

			<div className='profile-details'>
				<div>
					<h2>75 kg</h2>
					<p>Weight</p>
				</div>
				<div>
					<h2>6`6``</h2>
					<p>Height</p>
				</div>
				<div>
					<h2>20</h2>
					<p>Age</p>
				</div>
			</div>
			<div className='break-container'>
				<h1>Add a Break</h1>

				<div className='break-btn'>
					<button onClick={() => handleBreak(20)}>20</button>
					<button onClick={() => handleBreak(30)}>30</button>
					<button onClick={() => handleBreak(40)}>40</button>
					<button onClick={() => handleBreak(50)}>50</button>
				</div>
			</div>
			<div className='Excercise'>
				<h1>Excercise</h1>

				<div className='excercise-content'>
					<div className='excercise-details'>
						<h2>Excercise-Time </h2>
						<p>{time}s</p>
					</div>
					<div className='excercise-details'>
						<h2>Break-Time </h2>
						<p>{breaks ? breaks : `0`}s</p>
					</div>
				</div>
			</div>

			<button className='activities-btn'>Activity Complete</button>
		</div>
	);
};

export default Cart;
