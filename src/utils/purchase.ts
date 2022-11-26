import { DivideNInstallmentAddress } from '@src/constants/contract';
import { DivideNInstallment } from '@src/lib/DivideNInstallment';
import { ERC721abi } from '@src/lib/ERC721abi';

import { getContract } from './contract';

interface registerInstallmentProps {
  nftAddress: string;
  nftId: string;
  priceInMatic: number; // uint256
  collateralRatio: number;
  installmentMonths: number;
  ourContractAddress: string;
}

export const setApproveAll = async (nftAddress: string, ownerAddress: string) => {
  const purchaseContract = getContract({
    abi: ERC721abi.abi,
    contractAddress: DivideNInstallmentAddress,
  });

  await purchaseContract.setApprovalForAll(nftAddress, true);

  // for test
  return await purchaseContract.isApprovedForAll(ownerAddress, nftAddress);
};
export const registerInstallment = async ({
  nftAddress,
  nftId,
  priceInMatic,
  collateralRatio,
  installmentMonths,
  ourContractAddress,
}: registerInstallmentProps): Promise<number> => {
  const purchaseContract = getContract({
    abi: DivideNInstallment.abi,
    contractAddress: DivideNInstallmentAddress,
  });

  return await purchaseContract.registerInstallment(
    nftAddress,
    nftId,
    priceInMatic,
    collateralRatio,
    installmentMonths,
    ourContractAddress,
  );
};
