import { FC } from 'react';
import { Layout } from '../comps';
import Typewriter from 'typewriter-effect';
import { DevSvg } from '../comps';

const Home: FC = () => {

	return (
		<Layout>
			<div className="xd-content flex flex-col md:flex-row items-center justify-around md:mx-auto">
				<DevSvg className="h-72 w-72 md:h-96 md:w-96 md:order-last" />
				<div className="text-left mb-24 md:mb-0">
					<div className="text-md md:text-2xl font-mono pl-1">Hi, I am</div>
					<div className="text-5xl md:text-6xl xd-title my-2">Arnab Paryali</div>
					<div className="text-md md:text-xl font-mono">
						<Typewriter
							onInit={() => console.log("Typing Started")}
							options={{
								strings: ["A Developer", "An Open-Source Enthusiast", "I like Node.js & Python", "Freelancer"],
								autoStart: true,
								loop: true
							}}
						/>
					</div>
					{/* <button className="transition bg-secondary focus:outline-none hover:bg-green-500 my-2 px-5 py-1 rounded-full italic">Contact Me</button> */}
				</div>
			</div>
		</Layout>
	)
}

export default Home;