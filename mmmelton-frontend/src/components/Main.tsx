import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <main className="m-1 h-auto mb-0 border border-dashed border-gray-800">
      <Outlet />
    </main>
  );
};

export default Main;