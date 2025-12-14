const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
console.log('@'.repeat(N + 2) + `\n@${' '.repeat(N)}@`.repeat(N) + '\n' + '@'.repeat(N + 2));