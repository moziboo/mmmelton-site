import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <main className="p-4 m-1 mt-[4.1rem] h-auto mb-0 border border-dashed border-gray-800">
      <p className="mb-4">main</p>
      <Outlet />
    </main>
  );
};

export default Main;