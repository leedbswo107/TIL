/**
 * 문제
 * In the United States, beverage container deposit laws, or so-called bottle bills, are designed to reduce litter and reclaim bottles, cans and other containers for recycling. Ten states currently have some sort of deposit-refund systems in place for different types of beverage containers. These deposit amounts vary from 2¢ to 15¢ per container, depending on the type and volume of the container. For example, Oregon charges a (refundable) deposit of 2¢ per refillable container, and 10¢ for all others (with exceptions).
 * For this problem you will calculate the amount a customer will get refunded for a given collection of empty containers in the state of New York. New York’s rules are very simple: there is a 5¢ deposit for containers of any size less than one gallon containing beer, malt, wine products, carbonated soft drinks, seltzer and water (that does not contain sugar).
 * 
 * 출력
 * The output consists of a single line that contains a single integer representing the total refund the customer should get in cents.
 */
const bottles = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const result = bottles.reduce((acc, cur) => acc + cur * 5, 0);
console.log(result);