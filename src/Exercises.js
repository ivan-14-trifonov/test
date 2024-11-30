export function Computers(n) {
  let str = 'компьютер';

  if ((n >= 11) && (n <= 14))
    return n + ' ' + str + 'ов';
  let k = n % 10;
  if (k == 1)
    return n + ' ' + str;
  if ((k >= 2) && (k <= 4))
    return n + ' ' + str + 'a';
  if (((k >= 5) && (k <= 9)) || (k == 0))
    return n + ' ' + str + 'ов';
}

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

export function MultTable(max) {

  return (
    <table>
      <tr>
        <th></th>
        {Array(max).fill().map((_, j) => <th>{j+1}</th>)}
      </tr>
      {Array(max).fill().map((_, i) =>
        <tr>
          <th>{i+1}</th>
          {Array(max).fill().map((_, j) => <td>{(i+1)*(j+1)}</td>)}
        </tr>
      )}
    </table>
  )
}