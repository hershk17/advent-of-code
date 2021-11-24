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
    // console.log(data[i + 1][(3 * (i + 1)) % data[0].length] + " ");
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

  let count: number = 0;
  for (let i: number = 0; i < data.length - 1; i++) {
    // console.log(data[i + 1][(3 * (i + 1)) % data[0].length] + " ");
    if (data[i + 1][(3 * (i + 1)) % data[0].length] === "#") {
      count++;
    }
  }
  console.log(count);
}

processLineByLine();
processLineByLine2();