f = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
  });
  // 프라미스가 이행될 때까지 기다림 (*) async 함수에서는 await를 쓸 수 있되, promise 앞에만 쓸 수 있다.
  let result = await promise;

  alert(result); // "완료!"
};

f();
