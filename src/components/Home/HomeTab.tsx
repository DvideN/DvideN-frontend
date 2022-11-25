import React from 'react';

function HomeTab() {
  return (
    <div className="mt-1.5 text-center font-medium text-gray-500 border-b border-gray-200 w-full grid grid-cols-3">
      <a className="tab tab-bordered text-[16px] pb-[10px]" href="./">
        <span>Explore</span>
      </a>
      <a className="tab tab-bordered tab-active text-[16px] pb-[10px]" href="./">
        <span>Purchase</span>
      </a>
      <a className="tab tab-bordered text-[16px] pb-[10px]" href="./">
        <span>Sale</span>
      </a>
    </div>
  );
}

export default HomeTab;
