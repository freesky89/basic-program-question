// implement the promise.all
async function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    let isFail = false;
    for(let promise of promises) {
      promise().then((value) => {
        completed += 1;
        results.push(value);
        if (isFail) {
          reject(new Error());
        }
        if (completed === promises.length) {
          resolve(results)
        }
      }).catch(() => {
        isFail = true;
      });
    }
  });
}

const p1 = () => Promise.resolve('p1')
const p2 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 delay 1s')
  }, 1000)
})
const p3 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 delay 2s')
  }, 2000);
});

async function test() {
  const result = await myPromiseAll([p1, p2, p3]);
  console.log('result', result);
}

test();

