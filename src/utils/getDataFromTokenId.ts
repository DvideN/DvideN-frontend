import MockData from '@src/lib/mock-data.json';
export const getDataFromTokenId = (tokenId: string) => {
  return MockData.data.filter((item) => item.tokenId.toString() === tokenId)[0];
};
