import React from 'react';

function HomeTab() {
  return (
    <div className="mt-1.5 text-center font-medium text-gray-500 border-b border-gray-200 w-full grid grid-cols-3">
      <button className="tab tab-bordered text-[16px] pb-[10px]">Explore</button>
      <button className="tab tab-bordered tab-active text-[16px] pb-[10px]">Purchase</button>
      <button className="tab tab-bordered text-[16px] pb-[10px]">Sale</button>
    </div>
  );
}

export default HomeTab;
