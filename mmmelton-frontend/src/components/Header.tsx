import React from 'react';

interface HeaderProps {
  title: string;
  toggle: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, toggle, onToggle }) => {
  return (
    <header className="p-4 m-1 mb-0 border border-dashed border-gray-800">
      <div className="grid grid-cols-[1fr,25px] h-full">
        <div>
          <p>header</p>
        </div>
        <div className="cursor-pointer" onClick={onToggle}>
          <p className="text-center">o</p>
        </div>
      </div>
    </header>
  );
};

export default Header;