import { http, createConfig } from 'wagmi';
import { mainnet, polygon,sepolia } from 'wagmi/chains';
import {
  injectedWallet,
  gateWallet,
  rainbowWallet
} from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet, gateWallet, rainbowWallet],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);

export const config = createConfig({
  chains: [polygon, mainnet, sepolia],
  connectors: connectors,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [sepolia.id]: http(),
  },
});
