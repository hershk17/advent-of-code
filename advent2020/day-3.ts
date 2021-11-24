import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day-3.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[] = [];
  for await (const line of rl) {
    data.push(line);
  }

  let count: number = 0;
  for (let i: number = 0; i < data.length - 1; i++) {
    if (data[i + 1][(3 * (i + 1)) % data[0].length] === "#") {
      count++;
    }
  }
  console.log(count);
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day-3.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[] = [];
  for await (const line of rl) {
    data.push(line);
  }

  const slopes: number[][] = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  let prod: number = 1;
  for (let slope of slopes) {
    let count: number = 0;
    for (let i: number = 0, j:number = 0; i < data.length - slope[1]; i+=slope[1], j++) {
      if (data[i + slope[1]][(slope[0] * (j + 1)) % data[0].length] === "#") {
        count++;
      }
    }
    prod *= count;
  }
  console.log(prod);
}

processLineByLine();
processLineByLine2();
