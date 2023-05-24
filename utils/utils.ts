export const generateKey = (name: string) => {
  return `${name}_${new Date().getTime()}`;
};
