import { FC, useState } from 'react';
import { ToggleIcon, MenuIcon } from './icons';
import { useTheme } from 'next-themes';

export const Header: FC = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();
    const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <nav className="sticky top-0 shadow-xs bg-gray-50 dark:bg-black backdrop-filter backdrop-blur-lg bg-opacity-75 dark:bg-opacity-75 shadow">
            <div className="relative">
                <div className="md:flex justify-between px-4 py-5 items-center">
                    <div className="text-xl font-bold ml-3">Arnab</div>
                    <div className={"flex " + (isNavOpen ? "" : "hidden md:block")}>
                        <ul className={"items-center md:flex md:mr-12"}>
                            <li className={"mx-3 md:mx-2 my-1 md:my-auto"}>Projects</li>
                            <li className={"mx-3 md:mx-2 my-1 md:my-auto"}>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center absolute top-5 right-5">
                    <button onClick={switchTheme} className={"focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-2 h-8 w-8 grid place-items-center mx-2 ring-1 ring-current"}>
                        <ToggleIcon />
                    </button>
                    <button onClick={toggleNav} className={"focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-2 h-8 w-8 grid place-items-center ring-1 ring-current md:hidden"}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </nav>
    )
}