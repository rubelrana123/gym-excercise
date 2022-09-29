import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';

import "./Home.css"

import logo from "../../logo.png"
import Cart from '../Cart/Cart';

const Home = () => {
	const [excercises, setExcercises] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('gym.json')
			.then((res) => res.json())
			.then((data) => setExcercises(data));
	}, []);

	const handlerCart = (selectedExcercise) => {
	 let newCart = [...cart, selectedExcercise];
	 setCart(newCart);
	 
	}
	console.log(cart);

	return (
		<div className='home-container'>
			<div className='left-side'>
				<div className='header-container'>
					<div className='header-content'>
						<img src={logo} alt='' />
						<h2>RR GYM Club</h2>
					</div>
					<h3>Select Your Excercise</h3>
				</div>
				<div className='activities-container'>
					{excercises.map((excercise) => (
						<Activities
							handlerCart={handlerCart}
							key={excercise.id}
							excercise={excercise}
						></Activities>
					))}
				</div>
			</div>

			<div className='cart-summary'>
				<Cart cart = {cart}></Cart>
			</div>
		</div>
	);
};


export default Home;