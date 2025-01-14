import { ContactShadows, Html, OrbitControls, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import Model from './components/Model'
import Creator from './components/Text'
import Tree from './components/Tree'
import AnimatedBoxes from './components/AnimatedBoxes'
import Overlay from './components/Overlay'
import Avatar from './components/Avatar'



function App() {
	const ref = useRef()
	const refTorus = useRef()
	useFrame(()=>{
		
	})


	return (<>
	
		<ScrollControls  pages={4} damping={0.4} >
			<Model />
			<Avatar />
				<AnimatedBoxes />
			<ContactShadows blur={5} scale={30} far={10} resolution={256} />
			<Scroll>
				<Creator />
				<Tree />

				<OrbitControls enableZoom={false}/>
				<directionalLight
					intensity={1.5}
					position={[1, 2, 3]}
					castShadow
					color={"white"}
					shadow-mapSize={[2024,2024]}
					/>
				<ambientLight intensity={1}  />
				<pointLight position={[10, 10, 10]} />
			</Scroll>
		  <Overlay />
		</ScrollControls>
					</>
	)
}
export default App
