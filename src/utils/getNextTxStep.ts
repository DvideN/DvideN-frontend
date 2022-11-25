import { TransactionType } from '@src/types/purchase';

export const getNextTxStep = (step: TransactionType): TransactionType => {
  switch (step) {
    case 'transfer':
      return 'collateral';
    case 'collateral':
      return 'warpping';
    default:
      return 'transfer';
  }
};
