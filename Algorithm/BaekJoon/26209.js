/**
 * 문제
 * Spies Breaching Computers (SBC) is a private digital spy 
 * agency that is developing a new device for intercepting 
 * information using electromagnetic waves, which allows spying 
 * even without physical contact with the target.
 * The device tries to collect information one byte at a time, 
 * this is, a sequence of 8 bits where each of them, naturally, 
 * can have a value of 0 or 1. In certain situations, due to 
 * interference from other devices, the reading cannot be done 
 * successfully. In this case, the device returns the value 
 * 9 for the corresponding bit, informing that the reading 
 * could not be performed.
 * In order to automate the recognition of the information the 
 * device reads, a request was made for a program that, based 
 * on the information read by the device, informs whether all 
 * bits were read successfully or not. Your task is to write 
 * this program.
 * 
 * 출력
 * Print a single line containing the capital letter “S” if all 
 * bits are read successfully; otherwise print a single line 
 * containing the capital letter “F”, corresponding to a failure.
 */
console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number).includes(9) ? 'F' : 'S');