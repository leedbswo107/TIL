import * as assert from 'assert';
import * as os from 'os';

let v1 = 10;
let v2 = 10;
let v3 = 20;

// assert(v3 - v2);
// console.log('start');
let buf1 = Buffer.alloc(10);
let buf2 = Buffer.allocUnsafe(10);
console.log(buf1);
console.log(buf2);

let buf3 = Buffer.from('abcd');
let buf4 = Buffer.from('안녕하세요');
console.log(buf3);
console.log(buf4);
