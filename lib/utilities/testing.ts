export const initiateDelay = async (second: number) => {
  await new Promise((resolve) => setTimeout(resolve, second));
};
