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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="../vercel.svg" alt="ChitChat Logo" onClick={switchTheme} />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ArnabXD</div>
          <p className="text-gray-500">Arnab Paryali</p>
        </div>
      </div>
    </div>
  )
}

export default Home;