import { FC } from 'react';
import Head from 'next/head';
import { Header } from '../comps';

const Home: FC = () => {
	return (
		<div>
			<Head>
				<title>ArnabXD</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Header />
				<div className="m-5 md:m-8 lg:mx-60 h-screen w-auto bg-green-500" />
				<div className="m-5 md:m-8 lg:mx-60 h-screen w-auto bg-red-500" />
			</div>
		</div>
	)
}

export default Home;