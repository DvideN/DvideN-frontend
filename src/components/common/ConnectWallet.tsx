import styled from '@emotion/styled';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import theme from '@src/styles/theme';
import { getSliceAddress } from '@src/utils/string';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

function ConnectWallet() {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return (
    <>
      {isConnected ? (
        <StAddressBtn onClick={openAccountModal} type="button">
          {getSliceAddress(3, address)}
        </StAddressBtn>
      ) : (
        <StAddressBtn onClick={openConnectModal} type="button">
          Connect
        </StAddressBtn>
      )}
    </>
  );
  // );
}

export default ConnectWallet;
const StAddressBtn = styled.button`
  width: 92px;
  height: 34px;

  background: ${theme.colors.gray200};
  border-radius: 100px;
  font-weight: 700;

  color: ${theme.colors.gray800};
  font-size: 14px;
`;
