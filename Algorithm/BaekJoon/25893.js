const [n, ...list] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const result = new Array(+n);
list.forEach((e, i) => {
  const count = e.split(' ').map(Number).filter(v => v >= 10).length;
  let name = 'zilch';
  if (count === 1) name = 'double';
  else if (count === 2) name = 'double-double';
  else if (count === 3) name = 'triple-double';
  result[i] = `${e}\n${name}`;
});
console.log(result.join('\n\n'));