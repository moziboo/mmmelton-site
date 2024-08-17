import React from 'react';

const One: React.FC = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-rows-[1fr,auto] p-4 mr-2 mb-2 h-52 border border-dashed border-gray-800 text-center">
        <div>
        </div>
        <div>
          <p className="text-left">one</p>
        </div>
      </div>
      <div className="grid grid-rows-[1fr,auto] p-4 mr-2 mb-2 h-52 border border-dashed border-gray-800 text-center">
        <div>
        </div>
        <div>
          <p className="text-left">one</p>
        </div>
      </div>
      <div className="grid grid-rows-[1fr,auto] p-4 mr-2 mb-2 h-52 border border-dashed border-gray-800 text-center">
        <div>
        </div>
        <div>
          <p className="text-left">one</p>
        </div>
      </div>
      <div className="grid grid-rows-[1fr,auto] p-4 mr-2 mb-2 h-52 border border-dashed border-gray-800 text-center">
        <div>
        </div>
        <div>
          <p className="text-left">onesie</p>
        </div>
      </div>
    </div>
  );
};

export default One;