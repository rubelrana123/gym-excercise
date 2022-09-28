import React from 'react';
import Activities from '../Activities/Activities';
import "./Home.css"

const Home = () => {
  return (
		<div className='home-container'>
			<div className='activities-container'>
				<Activities></Activities>
			</div>

			<div className='cart-summary'>hello cart summary</div>
		</div>
	);
};

export default Home;