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
