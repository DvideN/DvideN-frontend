import { PROVIDER_URL } from '@src/constants/contract';
import { ethers } from 'ethers';

interface getContractProps {
  abi: any;
  contractAddress: string;
}
export const getContract = ({ abi, contractAddress }: getContractProps) => {
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  return contract;
};

export const getSignerContract = async ({ abi, contractAddress }: getContractProps) => {
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);

  // const metamask = new ethers.providers.Web3Provider(window.ethereum as any, 'any');
  // await metamask.send('eth_requestAccounts', []);
  // const signer = metamask.getSigner();
  // const signer = provider.getSigner();
  // console.log('signer', signer);
  const signer = new ethers.Wallet(
    '394f2021870844c16b7ac54808b28ad1c9e3d22284d7a1da97579aaa992f353f' as string,
    provider,
  );

  const contract = new ethers.Contract(contractAddress, abi, signer);
  // console.log('>>>>>>>>>>>> OHAHA', await contract);

  return contract;
};
