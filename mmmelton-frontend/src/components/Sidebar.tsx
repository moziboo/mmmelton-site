import React from 'react';
import { Link } from 'react-router-dom'
import { childRoutes } from '../routes';

interface HeaderProps {
    show: boolean;
    onToggle: () => void;
    onLink: () => void;
}

const Sidebar: React.FC<HeaderProps> = ({ show, onToggle, onLink }) => {
    const envTest = process.env.REACT_APP_TEST
    if (!show) {
        return null;
    } else {
        return (
            <div id="Sidebar" className="fixed inset-0 z-50 bg-white sm:z-auto sm:fixed sm:v-h-full sm:right-0 sm:w-[250px] sm:top-0 sm:bottom-0 sm:inset-auto sm:overflow-auto">
                <div className="absolute top-1 left-1 bottom-1 right-1 p-4 sm:left-0 border border-dashed border-gray-800">
                    <div className="grid grid-cols-[1fr,25px]">
                        <div>
                            <p>menu</p>
                            <p>{envTest}</p>
                        </div>
                        <div className="cursor-pointer" onClick={() => onToggle()}>
                            <p className="text-center">o</p>
                        </div>
                    </div>
                    <nav className="h-fit mt-4">
                        <ul>
                            {childRoutes.map((route, index) => (
                                <li key={index}>
                                    <Link onClick={onLink} to={route.path}>{route.path.replace('/', '')}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;