import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import DetailInstallment from '@src/components/Detail/DetailInstallment';
import DetailName from '@src/components/Detail/DetailName';
import DetailPrice from '@src/components/Detail/DetailPrice';
import useMounted from '@src/hooks/useMounted';
import theme from '@src/styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function Detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  // const [data, setData] = useState();

  const handleClick = () => {
    router.push(`/purchase/${id}`);
  };

  const ticker = 'MATIC';

  return (
    <>
      <Header />
      <StRoot>
        <div style={{ width: '100%', height: '483px', position: 'relative' }}>
          <Image
            src={
              'https://img.nftically.com/testnets-assets/assets/ebe27db1-64df-4d7a-8843-e1ce0f376c88/3876f3840d53480a9d83e52cedcd2166/snoop.png?tr='
            }
            layout="fill"
            alt="nft"
            objectFit="cover"
            blurDataURL={snoopImage.src}
            placeholder="blur"
          />
        </div>
        <DetailName name={'NoiaDuck'} account="0xC...761" />
        <StPriceWrap>
          <DetailPrice title="Total Price" price={`3500 ${ticker}`} />
          <DetailPrice title="Installment Price" price={`291.66 ${ticker}`} duration="1 month" />
        </StPriceWrap>
        <DetailInstallment month="12 months" collateral={`300 ${ticker}`} percent={10} />
        <RoundButton width="82.7%" height="65px" styleType="rainbow" onClick={handleClick}>
          Purchase
        </RoundButton>
      </StRoot>
    </>
  );
}

export default Detail;

const StRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 28px;

  margin-top: 12px;
  padding-bottom: 40px;
  width: 100%;
`;

const StPriceWrap = styled.div`
  display: grid;
  row-gap: 14px;

  width: 88.2%;
`;
