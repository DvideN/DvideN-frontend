import React from 'react';

function HomeTab() {
  return (
    <>
      <div className={'flex overflow-x-scroll overflow-y-hidden max-w-[100vw]'}>
        <div className="mt-1.5 m-auto text-center font-semibold text-gray-500 border-b flex gap-5 px-5">
          <button className="tab text-[16px] pb-10">Explore</button>
          <button className="tab tab-bordered tab-active text-[16px] pb-10">Purchases</button>
          <button className="tab text-[16px] whitespace-nowrap pb-10">My NFTs</button>
          <button className="tab text-[16px] whitespace-nowrap pb-10">Sales</button>
        </div>
        <div className="h-[1px] bg-gray-200" />
      </div>
    </>
  );
}

export default HomeTab;
