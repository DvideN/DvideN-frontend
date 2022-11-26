import MockData from '@src/lib/mock-data.json';
export const getMyNft = async (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(MockData as any);
    }, 1000);
  });
};
