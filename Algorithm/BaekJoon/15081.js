/**
 * 문제
 * Joyce Stick is a mother of several children and has strict rules on how much technology they can use. One of her rules is that each kid can have at most one app on their phone. While the kids aren’t thrilled with this rule, they know if they complain they will lose their half-hour a day TV privileges. In order to maximize the number of apps that they can share with each other they’ve decided that each kid will pick a different app. Of course, each kid likes different apps, and each wants the app they like best (or near best) to be the app on their phone. Here’s how they’ve decided to select the apps: each kid writes down the apps they like on a list, starting with the app they like the most to the app they like the least (and leaving off apps they have absolutely no interest in). Then the oldest kid gets to pick the first app on his/her list to put on their phone. The second oldest gets to pick the first app on their list, unless it’s already been picked by the oldest, in which case they get the second app on their list. This process repeats for each of the other kids – each gets the highest app on their list that hasn’t already been picked. Given a list of each kid’s app preferences, you must determine what app gets put on each phone.
 * 
 * 출력
 * Display the app selected for each kid’s phone, from oldest kid to youngest, separating each app’s name with a single blank. There will never be a test case where all of the apps on a kid’s list will have been selected by older kids.
 */
let [_, ...sons] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split("\n").map(e => e.split(' ').slice(1,));
const result = [];
sons.forEach(e => {
  for (let i = 0; i < e.length; i++) {
    if (!result.includes(e[i])) {
      result.push(e[i]);
      break;
    }
  }
});
console.log(result.join(' '));