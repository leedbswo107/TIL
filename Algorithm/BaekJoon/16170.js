const today = new Date();
const [y, m, d] = [today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate()];
console.log([y, m, d].join('\n'));