import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day1.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[] = [];
  for await (const line of rl) {
    data.push(line);
  }

  let cnt: number = 0;
  for (let i = 1; i < data.length; i++) {
      if(Number(data[i]) > Number(data[i-1])) {
          cnt++;
      }
  }

  console.log(cnt);
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day1.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: number[] = [];
  for await (const line of rl) {
    data.push(Number(line));
  }
  
  let cnt: number = 0;
  for (let i = 0; i < data.length; i++) {
      if((data[i] + data[i+1] + data[i+2]) < (data[i+1] + data[i+2] + data[i+3])) {
          cnt++;
      }
  }

  console.log(cnt);
}

// processLineByLine();
processLineByLine2();