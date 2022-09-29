import React from 'react';
 import profile from "../../men.png"
 import "./Cart.css"
const Cart = () => {
  return (
		<div className=''>
			
			<div className='profile-content'>
				<img src={profile} alt='' />
				<div>
					<h1>Rubel Rana</h1>
					<p>
						
						<span>Dinajpur,Rangpur</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
