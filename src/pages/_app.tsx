import '@rainbow-me/rainbowkit/styles.css';
import '@src/styles/tailwind.css';

import { Global, ThemeProvider } from '@emotion/react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import useRainbowKit from '@src/hooks/useRainbowKit';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { WagmiConfig } from 'wagmi';

function MyApp({ Component, pageProps }: AppProps) {
  const { wagmiClient, chains } = useRainbowKit();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
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
