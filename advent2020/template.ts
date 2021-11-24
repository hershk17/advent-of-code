import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day-x.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[] = [];
  for await (const line of rl) {
    data.push(line);
  }

}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day-x.txt");

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