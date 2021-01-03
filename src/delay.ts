// eslint-disable-next-line arrow-body-style
const delay = (time: number = 3000): Promise<void> => {
  return new Promise((resolve) => {
    // eslint-disable-next-line arrow-body-style
    setTimeout(() => {
      return resolve();
    }, time);
  });
};

export default delay;
