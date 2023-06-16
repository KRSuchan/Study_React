f = async () => {
  Promise.allSettled([
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(1);
      }, 3000)
    ),
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(2);
      }, 2000)
    ),
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(3);
      }, 1000)
    ),
  ]);
};

console.log(f());
