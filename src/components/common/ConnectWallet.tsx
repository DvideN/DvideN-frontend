import styled from '@emotion/styled';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import theme from '@src/styles/theme';
import { useAccount } from 'wagmi';

function ConnectWallet() {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return (
    <>
      {isConnected ? (
        <StAddressBtn onClick={openAccountModal} type="button">
          {`${address?.slice(0, 3)}...${address?.slice(-3)}`}
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
