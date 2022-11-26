import { DivideNInstallmentAddress, TestAddress } from '@src/constants/contract';
import { DivideNInstallment } from '@src/lib/DivideNInstallment';
import { ERC721abi } from '@src/lib/ERC721abi';
import { TestAbi } from '@src/lib/TestAbi';

import { getContract, getSignerContract } from './contract';

interface registerInstallmentProps {
  nftAddress: string;
  nftId: string;
  priceInMatic: number; // uint256
  collateralRatio: number;
  installmentMonths: number;
  ourContractAddress: string;
}

export const setApproveAll = async (nftAddress: string, ownerAddress?: string) => {
  console.log('ownerAddress', ownerAddress);
  const purchaseContract = await getSignerContract({
    abi: ERC721abi.abi,
    contractAddress: nftAddress,
  });
  // DivideNInstallmentAddress
  console.log('purchaseContract', purchaseContract);
  console.log('들어옴');

  await purchaseContract.setApprovalForAll(DivideNInstallmentAddress, true);
  console.log('approve');

  // // for test
  // return await purchaseContract.isApprovedForAll(ownerAddress, nftAddress);
};

export const approve = async (nftAddress: string, ownerAddress?: string, tokenId) => {
  // const purchaseContract = await getSignerContract({
  //   abi: ERC721abi.abi,
  //   contractAddress: nftAddress,
  // });
  // console.log('before', purchaseContract.address);
  // console.log('approving...', DivideNInstallmentAddress);
  // await purchaseContract.approve(DivideNInstallmentAddress, tokenId);
  // console.log('after');
  const testContract = await getSignerContract({
    abi: TestAbi.abi,
    contractAddress: TestAddress,
  });

  await testContract.setNumber(1);
  console.log('되니');
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
