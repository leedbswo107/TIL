let [n, A, m, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
A = A.split(' ').map(Number);
const products = {}
input.map(e => e.split(' ').map(Number)).map(([watt, price]) => products[watt] = !products[watt] ? price : products[watt] > price ? price : products[watt]);
const keys = Object.keys(products).map(Number);
const watt = A.map(e => keys.filter(el => el >= e).map(el => products[el]));
const result = watt.reduce((acc, cur) => acc + Math.min(...cur), 0);
console.log(result);