/**
 * 문제
 * Web colors are colors used in displaying web pages. Each color may be specified either as an RGB triple, or a common English name used for that color. Colors are specified according to the intensity of their red, green and blue components, each represented by eight bits. Thus, there are 24 bits used to specify a web color, and totally 16,777,216 colors can be imagined as web colors. But the HTML 4 specification defines only 16 named colors as shown in the table.
 * It is often useful to map one given color to one of the HTML named colors. The goal of this problem is to perform just such a mapping in the RGB color space. The input to the program consists of a collection of RGB color values to be mapped to the closest HTML named color.
 * For a given color, the “closest” color in the HTML color names is a color with the smallest Euclidean distance from the given color. That is, if rgb is the color to be mapped, and {
 * (R1G1B1), . . . , (R{16}G{16}B{16})} is the set of the HTML colors, the closest color is the one which minimizes the distance expression
 *  
 * d = sqrt{(Ri-r)^2 + (Gi - g)^2 + (Bi - b)^2}] 
 * where 
 * (i) is an integer from 1 to 16.
 * #	Name	Red	Green	Blue
 * 1	White	255	255	255
 * 2	Silver	192	192	192
 * 3	Gray	128	128	128
 * 4	Black	0	0	0
 * 5	Red	255	0	0
 * 6	Maroon	128	0	0
 * 7	Yellow	255	255	0
 * 8	Olive	128	128	0
 * 9	Lime	0	255	0
 * 10	Green	0	128	0
 * 11	Aqua	0	255	255
 * 12	Teal	0	128	128
 * 13	Blue	0	0	255
 * 14	Navy	0	0	128
 * 15	Fuchsia	255	0	255
 * 16	Purple	128	0	128
 * 
 * 출력
 * For each test case, output a line containing the name of the closest HTML color to the given color. If there are more than one closest color, print the one which has a smaller associated number in the above table.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const keys = [
  'White', 'Silver',
  'Gray', 'Black',
  'Red', 'Maroon',
  'Yellow', 'Olive',
  'Lime', 'Green',
  'Aqua', 'Teal',
  'Blue', 'Navy',
  'Fuchsia', 'Purple'
]
const RGB = [
  [255, 255, 255], [192, 192, 192],
  [128, 128, 128], [0, 0, 0],
  [255, 0, 0], [128, 0, 0],
  [255, 255, 0], [128, 128, 0],
  [0, 255, 0], [0, 128, 0],
  [0, 255, 255], [0, 128, 128],
  [0, 0, 255], [0, 0, 128],
  [255, 0, 255], [128, 0, 128]
]
input.pop();
const result = new Array(input.length);
const solution = (r, g, b) => {
  const process = new Array(16);
  RGB.forEach(([R, G, B], i) => process[i] = Math.abs(Math.sqrt((R - r) ** 2 + (G - g) ** 2 + (B - b) ** 2)));
  const min = Math.min(...process);
  return keys[process.indexOf(min)];
}
input.forEach((e, i) => result[i] = solution(...e));
console.log(result.join('\n'));