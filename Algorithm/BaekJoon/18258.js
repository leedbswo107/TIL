/**
 * 문제
 * 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
 * 명령은 총 여섯 가지이다.
 * push X: 정수 X를 큐에 넣는 연산이다.
 * pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * size: 큐에 들어있는 정수의 개수를 출력한다.
 * empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
 * front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * 
 * 출력
 * 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.
 */
const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
class Queue {
  constructor() {
    this.items = {},
      this.head = 0,
      this.tail = 0
  }

  enqueue(item) {
    this.items[this.tail++] = item;
  }
  dequeue() {
    if (this.empty() === 1) return -1;
    const num = this.items[this.head];
    delete this.items[this.head++];
    return num;
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  size() {
    return this.tail - this.head;
  }

  front() {
    if (this.empty() === 1) return -1;
    return this.items[this.head];
  }

  back() {
    if (this.empty() === 1) return -1;
    return this.items[this.tail - 1];
  }
}
const queue = new Queue();
const result = [];
for (let i = 0; i < +N; i++) {
  const arr = input[i].split(' ');
  switch (arr[0]) {
    case 'push':
      queue.enqueue(+arr[1]);
      break;
    case 'pop':
      result.push(queue.dequeue());
      break;
    case 'front':
      result.push(queue.front());
      break;
    case 'back':
      result.push(queue.back());
      break;
    case 'size':
      result.push(queue.size());
      break;
    case 'empty':
      result.push(queue.empty());
      break;
  }
}
console.log(result.join('\n'));