/**
 * 문제
 * Map websites such as Bing Maps and Google Maps often store their maps as many different image files, called tiles. The lowest zoom level (level 0) consists of a single tile with a low-detail image of the whole map, zoom level 1 consists of four tiles each containing a slightly more detailed version of a quarter of the map, and in general zoom level n contains 4 n different tiles that each contain a part of the map.
 * One way of identifying a tile is by means of a quadkey. A quadkey is a string of digits uniquely identifying a tile at a certain zoom level. The first digit specifies in which of the four quadrants of the whole map the tile lies: 0 for the top-left quadrant, 1 for the top-right quadrant, 2 for the bottom-left quadrant and 3 for the bottom-right quadrant. The subsequent digits specify in which sub quadrant of the current quadrant the tile is. The quadkeys for zoom levels 1 to 3 are shown in Figure I.1(a).
 * Another way of identifying a tile is to give the zoom level and x and y coordinates, where (0, 0) is the left-top corner. The coordinates for the tiles of zoom level 3 are shown in Figure I.1(b). Given the quadkey of a tile, output the zoom level and x and y coordinates of that tile.
 * 
 * 출력
 * Output three integers, the zoom level and the x and y coordinates of the tile.
 */
const s = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('').map(Number);
const depth = s.length;
let [x, y] = [0, 0];
s.forEach((e, i) => {
  (e > 1) && (y += 2 ** (depth - i - 1));
  (e % 2 === 1) && (x += 2 ** (depth - i - 1));
});
console.log(depth, x, y);