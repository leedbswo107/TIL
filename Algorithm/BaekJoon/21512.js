/**
 * 문제
 * 스마트 스쿨 프로젝트를 시행하면서, 선정된 학교의 각 교실에 자동 냉방 및 환기를 위한 차세대 에어컨을 설치하기로 결정했습니다. 이 프로젝트에 따르면, 각 교실에는 에어컨을 한 대만 설치해야 하며, 에어컨 용량은 교실 크기에 충분해야 합니다. 교실이 클수록 에어컨의 성능은 더욱 강력해야 합니다.
 * 학교의 모든 학급은 1부터 n까지 순차적으로 번호가 매겨져 있습니다. 번호가 i인 각 학급에는 ai 와트 이상의 전력을 가진 에어컨이 정확히 한 대 필요합니다.
 * 학교 행정실에는 구입할 수 있는 m가지 모델의 에어컨 목록이 제공되었습니다. 각 모델의 출력과 가격은 알려져 있습니다. 학교 내 모든 교실에 설치할 수 있는 에어컨의 최소 총비용을 계산하는 프로그램을 작성해야 합니다. 
 * 
 * 출력
 * 출력 파일에는 에어컨의 최소 총 비용(루블)을 나타내는 숫자 하나가 포함되어야 합니다. 적어도 하나의 올바른 에어컨 선택이 존재하고 모든 등급에 적합한 에어컨을 설치할 수 있도록 보장됩니다. 
 */
let [n, A, m, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
A = A.split(' ').map(Number);
const products = {}
input.map(e => e.split(' ').map(Number)).map(([watt, price]) => products[watt] = !products[watt] ? price : products[watt] > price ? price : products[watt]);
const keys = Object.keys(products).map(Number);
const watt = A.map(e => keys.filter(el => el >= e).map(el => products[el]));
const result = watt.reduce((acc, cur) => acc + Math.min(...cur), 0);
console.log(result);