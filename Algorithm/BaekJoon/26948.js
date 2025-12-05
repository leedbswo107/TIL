/**
 * 문제
 * Man vill skapa en längre planka med hjälp av ett antal mindre brädor. Det finns tre olika typer av brädor, som har längden 1, 2 respektive 3 meter. 
 * Det finns ett obegränsat antal av varje typ. 
 * Det finns 7 sätt att limma ihop en planka som är 4 meter lång. kriv ett program som bestämmer på hur många olika sätt man kan åstadkomma en planka av längden n.
 * 
 * 출력
 * skriv ut ett enda heltal -- antalet sätt du kan limma ihop en planka som är n meter lång.
 */
const n = +require('fs').readFileSync(0, 'utf-8').trim();
const dp = [1, 2, 4];
for (let i = 3; i < n; i++) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
console.log(dp[n - 1]);
