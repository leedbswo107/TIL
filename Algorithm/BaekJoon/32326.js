/**
 * 문제
 * There is a new conveyor belt sushi restaurant in town. 
 * Plates of sushi travel around the restaurant on a raised 
 * conveyor belt and customers choose what to eat by removing 
 * plates.
 * Each red plate of sushi costs $3, each green plate of sushi 
 * costs $4, and each blue plate of sushi costs $5.
 * Your job is to determine the cost of a meal, given the 
 * number of plates of each colour chosen by a customer.
 * 
 * 출력
 * Output the non-negative integer, C, which is the cost of the 
 * meal in dollars.
 */
const sushi = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
let price = 0;
sushi.forEach((e, i) => price += (e * (i + 3)));
console.log(price);