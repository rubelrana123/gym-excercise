import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toast';
import profile from "../../men.png"
import { getFromLocalStorage, setToLocalStorage } from '../../utilities/fakedb';
import "./Cart.css"
const Cart = ({ cart }) => {
	const [breaks, setBreaks] = useState(0);

   useEffect (() => {
        let storeTime = localStorage.getItem('break-time');
				if (storeTime) {
					storeTime = getFromLocalStorage();
					// setBreaks(storeTime);
				} else {
					storeTime = 0;
				}
				setBreaks(storeTime);
   }, [])
    // setBreaks(value);
  	const handleBreak = (value) => {
			setBreaks(value);
     setToLocalStorage(value);
		};

	let time = 0;
	for (const eachCart of cart) {
		time = time + eachCart.time;
	}

	// console.log(breaks);

	const success = () => toast.success('Activities Complete successfully!');

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
						<p>{breaks}s</p>
					</div>
				</div>
			</div>

			<button onClick={success} className='activities-btn'>
				Activity Complete
			</button>
			<ToastContainer />
		</div>
	);
};

export default Cart;
