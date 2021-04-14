import { FC, useState } from 'react';
import { ToggleIcon, MenuIcon } from './icons';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';

export interface HeaderProps {
    title?: string
}

export const Header: FC<HeaderProps> = ({ title }) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();
    const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <>
            <Head>
                <title>{"Arnab" + (title && ` // ${title}`)}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="sticky top-0 bg-gray-50 dark:bg-black backdrop-filter backdrop-blur-lg bg-opacity-75 dark:bg-opacity-75 shadow-md">
                <div className="relative">
                    <div className="md:items-center md:flex justify-between px-4 py-5 md:px-8 lg:px-48 text-xl">
                        <Link href="/">
                            <span className="text-4xl xd-title cursor-pointer ml-2">{"<Arnab/>"}</span>
                        </Link>
                        <div className={"flex " + (isNavOpen ? "" : "hidden md:block")}>
                            <ul className={"items-center md:flex md:mr-12"}>
                                <Link href="/projects">
                                    <li className={"transform transition duration-150 ease-in-out hover:text-primary mx-3 md:mx-2 my-1 md:my-auto cursor-pointer"}>Projects</li>
                                </Link>
                                <Link href="/contact">
                                    <li className={"transform transition duration-150 ease-in-out hover:text-primary mx-3 md:mx-2 my-1 md:my-auto cursor-pointer"}>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center absolute top-6 right-5 md:right-8 lg:right-48">
                        <button onClick={switchTheme} className={"transform hover:text-primary focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-2 h-8 w-8 grid place-items-center mx-2 ring-1 ring-current ring-opacity-50"}>
                            <ToggleIcon />
                        </button>
                        <button onClick={toggleNav} className={"transform hover:text-primary focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-2 h-8 w-8 grid place-items-center ring-1 ring-current ring-opacity-50 md:hidden"}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}