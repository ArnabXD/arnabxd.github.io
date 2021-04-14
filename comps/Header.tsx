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
                    <div className="items-center md:flex justify-between px-4 py-5 md:px-8 lg:px-32">
                        <Link href="/">
                            <div className="ml-3 text-3xl font-semibold xd-title bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-blue-600">{"<Arnab/>"}</div>
                        </Link>
                        <div className={"flex " + (isNavOpen ? "" : "hidden md:block")}>
                            <ul className={"items-center md:flex md:mr-12"}>
                                <Link href="/projects">
                                    <li className={"mx-3 md:mx-2 my-1 md:my-auto cursor-pointer"}>Projects</li>
                                </Link>
                                <Link href="/contact">
                                    <li className={"mx-3 md:mx-2 my-1 md:my-auto cursor-pointer"}>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center absolute top-5 right-5 md:right-8 lg:right-32">
                        <button onClick={switchTheme} className={"focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-2 h-8 w-8 grid place-items-center mx-2 ring-1 ring-current ring-opacity-50"}>
                            <ToggleIcon />
                        </button>
                        <button onClick={toggleNav} className={"focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-2 h-8 w-8 grid place-items-center ring-1 ring-current ring-opacity-50 md:hidden"}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}