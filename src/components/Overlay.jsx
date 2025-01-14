import { Scroll } from '@react-three/drei'
import React from 'react'

function Overlay() {
	return (
		<Scroll html >
			<div className='blocks block-1'>
				<h1>Welcome to my Portfolio <br /> Enjoy and have a fun!</h1>
			</div>
				<div className='blocks block-2' style={{ position: "absolute", top: '100vh' }}>
					<div className="box">
						<h1>Look like amazing</h1> 
						<p>Follow for other videos with link</p> 
						<button> <img src="/insta.png" alt="" />Instagram</button>
						
					</div>
					<div className="box">
						<h1>Join our community</h1> 
						<p>And feel free to share your works</p> 
						<button> <img src="/tele.png" alt="" />Telegram</button>
					</div>
				</div>
				<div className='blocks block-3' style={{ position: "absolute", top: '200vh' }}>
					<h1>React Three Fiber</h1>
				</div>
				<div className='blocks block-4' style={{ position: "absolute", top: '300vh' }}>
					<div className="box">
						<h1>Instagram: @Dostonbek_dev</h1>
						<h1>Telegram: @Dostonbek_de</h1>
						<h1>Youtube: @Dostonbek_dev</h1>
					</div>
				</div>
		</Scroll>
	)
}

export default Overlay
