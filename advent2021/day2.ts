import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day2.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[][] = [[]];
  for await (const line of rl) {
    data.push(line.split(" "));
  }

  let horizontal: number = 0;
  let depth: number = 0;

  data.forEach((i) => {
    switch (i[0]) {
      case "forward":
        horizontal += Number(i[1]);
        break;
      case "up":
        depth -= Number(i[1]);
        break;
      case "down":
        depth += Number(i[1]);
        break;
      default:
        break;
    }
  });

  console.log(horizontal * depth);
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day2.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[][] = [[]];
  for await (const line of rl) {
    data.push(line.split(" "));
  }

  let horizontal: number = 0;
  let depth: number = 0;
  let aim: number = 0;

  data.forEach((i) => {
    switch (i[0]) {
      case "forward":
        horizontal += Number(i[1]);
        depth += aim * Number(i[1]);
        break;
      case "up":
        aim -= Number(i[1]);
        break;
      case "down":
        aim += Number(i[1]);
        break;
      default:
        break;
    }
  });

  console.log(horizontal*depth);
}

// processLineByLine();
processLineByLine2();
