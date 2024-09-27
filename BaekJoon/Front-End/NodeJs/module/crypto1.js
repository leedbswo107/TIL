import * as crypto from 'crypto';

let ciphers = crypto.getCiphers();

// ciphers.forEach((e) => {
//   console.log('cipher : ', e);
// });

let password = 'Password used to generate key';
let key = crypto.scryptSync(password, 'salt', 24);
let data = 'encode data';
let iv = Buffer.alloc(16, 0);
let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);

let result = cipher.update(data, 'utf-8', 'base64');

result += cipher.final('base64');
console.log(result);
