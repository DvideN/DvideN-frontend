import { DivideNInstallmentAddress } from '@src/constants/contract';
import { DivideNInstallment } from '@src/lib/DivideNInstallment';

import { getContract } from './contract';

export const getBuyableInstallments = async () => {
  const purchaseContract = getContract({
    abi: DivideNInstallment.abi,
    contractAddress: DivideNInstallmentAddress,
  });

  console.log('purchaseContract', purchaseContract);

  return await purchaseContract.getBuyableInstallments();
};
