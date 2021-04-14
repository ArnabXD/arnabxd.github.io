import { FC } from 'react';
import { Layout } from '../comps';
import Typewriter from 'typewriter-effect';
import { DevSvg } from '../comps';

const Home: FC = () => {

	return (
		<Layout>
			<div className="xd-content flex items-center justify-around mx-4 md:mx-auto">
				<div>
					<div className="text-2xl md:text-3xl font-mono pl-1">Hi, I am</div>
					<div className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-blue-600 xd-title mt-3 mb-2">Arnab Paryali</div>
					<div className="text-lg md:text-2xl font-mono">
						<Typewriter
							onInit={() => console.log("Typing Started")}
							options={{
								strings: [
									"A Developer", "An Open-Source Enthusiast", "I like Node.js & Python"
								],
								autoStart: true,
								loop: true,
								delay: 50,
							}}
						/>
					</div>
				</div>
				<DevSvg className="hidden md:block h-96"/>
			</div>
		</Layout>
	)
}

export default Home;