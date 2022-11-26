import { DivideNInstallmentAddress } from '@src/constants/contract';
import { DivideNInstallment } from '@src/lib/DivideNInstallment';

import { getContract } from './contract';

export const getBuyingInstallmentsInProgress = async () => {
  const purchaseContract = getContract({
    abi: DivideNInstallment.abi,
    contractAddress: DivideNInstallmentAddress,
  });

  return await purchaseContract.getBuyingInstallmentsInProgress;
};
