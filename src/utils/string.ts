export const getSliceAddress = (num: number, address?: string) => {
  return `${address?.slice(0, num)}...${address?.slice(-num)}`;
};
