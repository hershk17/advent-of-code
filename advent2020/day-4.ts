import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day-4.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[][] = [];
  let idx: number = 0;
  for await (const line of rl) {
    if (line !== "") {
      data[idx] = line.split(" ");
    } else {
      idx++;
    }
  }

  for await (const item of data) {
    console.log(item);
  }
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day-4.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[] = [];
  for await (const line of rl) {
    data.push(line);
  }
}

processLineByLine();
// processLineByLine2();
