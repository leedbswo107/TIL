/**
 * 문제
 * Adapters (Transformers) are used with many devices 
 * (e.g., cell phones) to convert the 110 volt coming out of 
 * the outlet. The adapter for Dr. Orooji's Christmas Tree 
 * broke and Dr. O could not find that model online or in 
 * stores. The tree adapter was showing the “ampere” but the 
 * adapters online were showing “watt” and “volt”! So, Dr. O 
 * had to refer to the “Electricity 101 Book” to figure out 
 * what to buy:
 * Watt: measure of power
 * Volt: measure of electric potential
 * Ampere: measure of current
 * watt = ampere × volt → ampere = watt / volt
 * Given the ampere for Dr. O’s Christmas tree, and the watt 
 * and volt for a candidate adapter, determine if the candidate 
 * adapter will work with the tree. The adapter will work if 
 * its ampere is greater than or equal to the tree’s ampere.
 * 
 * 출력
 * Print 1 if the candidate adapter will work with the tree, 
 * 0 (zero) otherwise.
 */
const [a, i] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [w, v] = i.split(' ').map(Number);
console.log(+a > (w / v) ? 0 : 1);