/**
 * 문제
 * Pero has negotiated a Very Good data plan with his internet provider. The provider will let Pero use up X megabytes to surf the internet per month. Each megabyte that he doesn’t spend in that month gets transferred to the next month and can still be spent. Of course, Pero can only spend the megabytes he actually has.
 * If we know how much megabytes Pero has spent in each of the first N months of using the plan, determine how many megabytes Pero will have available in the N + 1 month of using the plan. 
 * 
 * 출력
 * The first and only line of output must contain the required value from the task. 
 */
const [N, _, ...p] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const result = p.reduce((acc, cur) => acc + N - cur, 0) + N;
console.log(result);