import { DivideNInstallmentAddress } from '@src/constants/contract';
import { DivideNInstallment } from '@src/lib/DivideNInstallment';

import { getContract } from './contract';

export const setApproveAll = async (nftAddress: string) => {
  const purchaseContract = getContract({
    abi: DivideNInstallment.abi,
    contractAddress: DivideNInstallmentAddress,
  });

  await purchaseContract.setApprovalForAll(nftAddress, true);
};
