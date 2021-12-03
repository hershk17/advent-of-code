import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day3.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const n: number = 12;
  let data: number[] = new Array(n).fill(0);
  let cnt: number = 0;
  for await (const line of rl) {
    for (let i = 0; i < line.length; i++) {
      data[i] += Number(line[i]);
    }
    cnt++;
  }

  let gamma: string = "";
  let epsilon: string = "";
  data.forEach((num) => {
    let result: boolean = num > cnt / 2;
    gamma += Number(result);
    epsilon += Number(!result);
  });

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day3.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const n: number = 12;
  let data: number[] = new Array(n).fill(0);
  let cnt: number = 0;
  for await (const line of rl) {
    for (let i = 0; i < line.length; i++) {
      data[i] += Number(line[i]);
    }
    cnt++;
  }

  let gamma: string = "";
  let epsilon: string = "";
  data.forEach((num) => {
    let result: boolean = num > cnt / 2;
    gamma += Number(result);
    epsilon += Number(!result);
  });

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
}

// processLineByLine();
processLineByLine2();
