import MockSaleData from '@src/lib/mock-data-sale.json';
export const getSaleNft = async (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(MockSaleData as any);
    }, 1000);
  });
};
