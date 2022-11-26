import { useRouter } from 'next/router';
import React, { useState } from 'react';

function HomeTab() {
  const router = useRouter();
  const pathName = router.pathname;

  const focusedClass = 'tab tab-bordered tab-active text-[16px] whitespace-nowrap pb-10';
  const unfocusedClass = 'tab text-[16px] whitespace-nowrap pb-10';

  console.log('pathname', pathName.slice(1));

  const [focusedTab, setFocusedTab] = useState(pathName.slice(1));

  const setTailWindClass = (id: string) => {
    if (focusedTab == '' && id == 'explore') return focusedClass;

    if (id == focusedTab) return focusedClass;
    else return unfocusedClass;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFocusedTab(e.currentTarget.id);

    switch (e.currentTarget.id) {
      case 'explore':
        router.push('/');
        break;
      case 'purchase':
        router.push('/purchase');
        break;
      case 'my':
        router.push('/my');
        break;
      case 'sale':
        router.push('/sale');
        break;
      default:
        router.push('/');
        break;
    }
  };

  return (
    <>
      <div className={'flex overflow-x-scroll overflow-y-hidden max-w-[100vw]'}>
        <div className="mt-1.5 m-auto text-center font-semibold text-gray-500 border-b flex gap-5 px-5">
          <button id={'explore'} className={setTailWindClass('explore')} onClick={handleClick}>
            Explore
          </button>
          <button id={'purchase'} className={setTailWindClass('purchase')} onClick={handleClick}>
            Purchases
          </button>
          <button id={'my'} className={setTailWindClass('my')} onClick={handleClick}>
            My NFTs
          </button>
          <button id={'sale'} className={setTailWindClass('sale')} onClick={handleClick}>
            Sales
          </button>
        </div>
        <div className="h-[1px] bg-gray-200" />
      </div>
    </>
  );
}

export default HomeTab;
