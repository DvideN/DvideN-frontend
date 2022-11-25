import styled from '@emotion/styled';
import {
  ConnectButton,
  useAccountModal,
  useChainModal,
  useConnectModal,
} from '@rainbow-me/rainbowkit';
import theme from '@src/styles/theme';

function ConnectWallet() {
  // return (
  // <ConnectButton.Custom>
  //   {({
  //     account,
  //     chain,
  //     openAccountModal,
  //     openChainModal,
  //     openConnectModal,
  //     authenticationStatus,
  //     mounted,
  //   }) => {
  //     // Note: If your app doesn't use authentication, you
  //     // can remove all 'authenticationStatus' checks
  //     const ready = mounted && authenticationStatus !== 'loading';
  //     const connected =
  //       ready &&
  //       account &&
  //       chain &&
  //       (!authenticationStatus || authenticationStatus === 'authenticated');

  //     return (
  //       <div
  //         {...(!ready && {
  //           'aria-hidden': true,
  //           style: {
  //             opacity: 0,
  //             pointerEvents: 'none',
  //             userSelect: 'none',
  //           },
  //         })}
  //       >
  //         {(() => {
  //           if (!connected) {
  //             return (
  //               <button onClick={openConnectModal} type="button">
  //                 Connect Wallet
  //               </button>
  //             );
  //           }

  //           if (chain.unsupported) {
  //             return (
  //               <button onClick={openChainModal} type="button">
  //                 Wrong network
  //               </button>
  //             );
  //           }

  //           return (
  //             <div style={{ display: 'flex', gap: 12 }}>
  //               <button
  //                 onClick={openChainModal}
  //                 style={{ display: 'flex', alignItems: 'center' }}
  //                 type="button"
  //               >
  //                 {chain.hasIcon && (
  //                   <div
  //                     style={{
  //                       background: chain.iconBackground,
  //                       width: 12,
  //                       height: 12,
  //                       borderRadius: 999,
  //                       overflow: 'hidden',
  //                       marginRight: 4,
  //                     }}
  //                   >
  //                     {chain.iconUrl && (
  //                       <img
  //                         alt={chain.name ?? 'Chain icon'}
  //                         src={chain.iconUrl}
  //                         style={{ width: 12, height: 12 }}
  //                       />
  //                     )}
  //                   </div>
  //                 )}
  //                 {chain.name}
  //               </button>

  //               <button onClick={openAccountModal} type="button">
  //                 {account.displayName}
  //                 {account.displayBalance ? ` (${account.displayBalance})` : ''}
  //               </button>
  //             </div>
  //           );
  //         })()}
  //       </div>
  //     );
  //   }}
  // </ConnectButton.Custom>
  // <button onClick={openConnectModal}>Connect</button>
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  // const { openChainModal } = useChainModal();

  return (
    <>
      {openConnectModal && (
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
      )}

      {openAccountModal && (
        <StAddressBtn onClick={openAccountModal} type="button">
          Open Account Modal
        </StAddressBtn>
      )}
    </>
  );
  // );
}

export default ConnectWallet;
const StAddressBtn = styled.button`
  padding: 6px 16px;

  width: 92px;
  height: 34px;

  background: ${theme.colors.gray200};
  border-radius: 100px;

  color: ${theme.colors.gray800};
  font-size: 14px;
`;
