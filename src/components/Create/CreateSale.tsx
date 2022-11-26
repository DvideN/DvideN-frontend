import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';
interface CreateSaleProps {
  imageUrl: any;
  name: string;
}
function CreateSale({ imageUrl, name }: CreateSaleProps) {
  return (
    <>
      <StImageWrap>
        <Image
          src={imageUrl}
          alt={'nft'}
          layout={'fill'}
          objectFit={'cover'}
          blurDataURL={imageUrl}
          placeholder="blur"
        />
      </StImageWrap>
      <StNameLabel>{name}</StNameLabel>
    </>
  );
}

export default CreateSale;

const StImageWrap = styled.div`
  width: 89.3%;
  aspect-ratio: 335 / 348;
  position: relative;

  border-radius: 8px;
  overflow: hidden;
`;

const StNameLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  color: ${theme.colors.gray600};

  margin-top: 16px;
`;
