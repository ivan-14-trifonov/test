export function CommonDivisors(givenArr) {

  let res = [];

  for (let i = 2; i <= Math.min.apply(null, givenArr); i++) {
    let flag = true;
    for (let j = 0; j < givenArr.length; j++) {
      if (givenArr[j] % i != 0) {
        flag = false;
      }
    }
    if (flag) res.push(i);
  }

  return res;
}