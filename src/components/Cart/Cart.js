import React from 'react';
 import profile from "../../men.png"
 import "./Cart.css"
const Cart = ({ cart }) => {
	console.log(cart);

  let time = 0;
  for (const eachCart of cart) {
    time = time + eachCart.time
  }
  
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
					<button>20</button>
					<button>30</button>
					<button>40</button>
					<button>50</button>
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
						<p>15s</p>
					</div>
				</div>
			</div>

      <button className='activities-btn'>
        Activity Complete
      </button>
		</div>
	);
};

export default Cart;
