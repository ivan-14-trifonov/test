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

export function PrimeNumbers(min, max) {

  if (min < 2) min = 2;
  if (max < 2) max = 2;

  let res = [];

  for (let i = min; i <= max; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
      }
    }
    if (flag) res.push(i);
  }

  return res;
}