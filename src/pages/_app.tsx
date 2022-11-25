import '@rainbow-me/rainbowkit/styles.css';
import '@src/styles/tailwind.css';

import { Global, ThemeProvider } from '@emotion/react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import useRainbowKit from '@src/hooks/useRainbowKit';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';

function MyApp({ Component, pageProps }: AppProps) {
  const { wagmiClient, chains } = useRainbowKit();

  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode={true}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
