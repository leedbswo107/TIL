/**
 * 문제
 * Matrix is a mathematical object which arranges data into a rectangular array of N rows and M columns. The rows are indexed from 1 to N, while the columns are indexed from 1 to M. Matrix is very powerful and extremely useful in many applications. In this problem, we are going to focus on two simple operations in matrix: row addition and column addition.
 * You are given a matrix of integers of N rows and M columns, and Q queries of the following format:
 * row k val: add each element on the k-th row by val,
 * col k val: add each element on the k-th column by val.
 * Your task is to output the following three numbers after all queries have been performed:
 * sum: the sum of all elements in the matrix,
 * min: the value of the smallest element in the matrix,
 * max: the value of the largest element in the matrix.
 * See the sample input for clarity
 * 
 * 출력
 * The output contains three integers (each separated by a single space) in a single line: sum min max, as described in the problem statement.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input.slice(1, 1 + N).map(e => e.split(' ').map(Number));
const Q = +input[1 + N];
let query = input.slice(2 + N).map(e => e.split(' '));
query = query.map(([q, x, y]) => [q, +x, +y]);
query.forEach(([q, x, y]) => {
  if (q === 'row') for (let i = 0; i < M; i++) A[x - 1][i] += y;
  else if (q === 'col') for (let i = 0; i < N; i++) A[i][x - 1] += y;
});
const nums = A.flat();
const setNum = Array.from(new Set(nums));
const result = `${nums.reduce((acc, cur) => acc + cur, 0)} ${Math.min(...setNum)} ${Math.max(...setNum)}`;
console.log(result);