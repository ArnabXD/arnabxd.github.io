import { useState, useEffect, FC } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setIsMounted(true);
	}, []);
	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === "light" ? "dark" : "light");
		}
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>ArnabXD</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div onClick={switchTheme} className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md flex items-center space-x-4">
				<div className="p-5 mx-auto text-center">
					<div className="text-xl font-medium">ArnabXD</div>
					<p className="text-gray-500">Arnab Paryali</p>
				</div>
			</div>
		</div>
	)
}

export default Home;