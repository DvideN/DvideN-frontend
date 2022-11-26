import MockData from '@src/lib/mock-data.json';
import MockAllData from '@src/lib/mock-data-all.json';
export const getMyNft = async (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(MockData as any);
    }, 1000);
  });
};

export const getAllNft = async (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(MockAllData as any);
    }, 1000);
  });
};
