import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const useRainbowKit = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [
      // chain.polygon,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? [chain.polygonMumbai]
        : [chain.polygon]),
    ],
    [
      alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string,
      }),
      publicProvider(),
    ],
  );
  const { connectors } = getDefaultWallets({
    appName: 'DvideN App',
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });

  return {
    wagmiClient,
    chains,
  };
};

export default useRainbowKit;
