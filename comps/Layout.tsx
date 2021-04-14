import { FC } from 'react';
import { Header } from './Header';

interface LayoutProps {
    title?: string;
    center?: boolean
}

export const Layout: FC<LayoutProps> = ({ title, center, children }) => {
    return (
        <div>
            <Header title={title ? title : ''} />
            <div className={"items-center px-4 md:px-8 lg:px-48"}>
                {children}
            </div>
        </div>
    )
}
