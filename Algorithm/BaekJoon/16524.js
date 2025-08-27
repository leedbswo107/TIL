/**
 * 문제
 * Nowadays there are billions of email users. A little-known fact is that some email providers offer way more than the usual username@provider.com email address.
 * Some providers simply ignore dots in usernames. Thus, if John owns the username johnsmith, he could tell people that his email address is johnsmith@provider.com, john.smith@provider.com or john.s.mith@provider.com, among others. Emails sent to any of these addresses would end up on his mailbox.
 * Other providers allow appending the character “+” followed by any combination of letters and/or digits after the username. With this feature, by registering the username johnsmith, John would also be able to use johnsmith+friends@provider.com and johnsmith+2x3is6@provider.com.
 * Sometimes both features are available at once and in those cases john.smith+icpc@provider.com and john.smith+wants.2.eat.lemon.3.14@provider.com are valid addresses that John could use.
 * This is quite useful for users, who can manage different addresses to help organize their mailboxes and easily filter the newsletters eventually sent after registering on a new website. Unfortunately, this also opens up space for abuse. Some websites rely upon the fact that each email address identifies a single user. However, a misbehaving user might easily create multiple accounts by taking advantage of the multiple addresses allowed by the email provider.
 * After learning all of this your boss got really worried. What if the number of unique users that has been reported to the shareholders is not accurate, bloated by duplicate accounts instead? That brings you to the task at hand: given the list of all email addresses from the users database of the company, you must determine the real number of unique users, assuming that all email providers have both described features available.
 * 
 * 출력
 * Output a single line with an integer indicating the number of unique users in the database.
 */
const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const emails = input.map(e => {
  const tmp = e.split('');
  let email = [];
  let plus = false;
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] === '@') {
      email = [...email, ...tmp.slice(i)];
      break;
    } else if (tmp[i] === '+') plus = true;
    else if ((tmp[i] !== '.') && !plus) email.push(tmp[i]);
  }
  return email.join('');
});
const result = (new Set(emails)).size;
console.log(result);