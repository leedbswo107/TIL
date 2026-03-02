const nums = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(nums[0] + nums[2] === nums[4] ? 'YES' : 'NO');