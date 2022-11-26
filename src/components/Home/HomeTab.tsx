import { useRouter } from 'next/router';
import React from 'react';

function HomeTab() {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'explore':
        router.push('/');
        break;
      case 'purchase':
        router.push('/');
        break;
      case 'my':
        router.push('/');
        break;
      case 'sale':
        router.push('/');
        break;
      default:
        break;
    }
    // router.push('/');
  };

  return (
    <>
      <div className={'flex overflow-x-scroll overflow-y-hidden max-w-[100vw]'}>
        <div className="mt-1.5 m-auto text-center font-semibold text-gray-500 border-b flex gap-5 px-5">
          <button id={'explore'} className="tab text-[16px] pb-10" onClick={handleClick}>
            Explore
          </button>
          <button
            id={'purchase'}
            className="tab tab-bordered tab-active text-[16px] pb-10"
            onClick={handleClick}
          >
            Purchases
          </button>
          <button
            id={'my'}
            className="tab text-[16px] whitespace-nowrap pb-10"
            onClick={handleClick}
          >
            My NFTs
          </button>
          <button
            id={'sale'}
            className="tab text-[16px] whitespace-nowrap pb-10"
            onClick={handleClick}
          >
            Sales
          </button>
        </div>
        <div className="h-[1px] bg-gray-200" />
      </div>
    </>
  );
}

export default HomeTab;
