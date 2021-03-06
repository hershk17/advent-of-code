import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day-2.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let valid: number = 0;

  for await (const line of rl) {
    var keys = line.split(new RegExp("-|\\-| |\\: ", "g"));

    let count: number = 0;
    for (let c of keys[3]) {
      if (c === keys[2]) {
        count++;
      }
    }

    if (count >= Number(keys[0]) && count <= Number(keys[1])) {
      valid++;
    }
  }

  console.log(valid);
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day-2.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let valid: number = 0;
  for await (const line of rl) {
    var keys = line.split(new RegExp("-|\\-| |\\: ", "g"));

    let c1: string = keys[3][Number(keys[0]) - 1];
    let c2: string = keys[3][Number(keys[1]) - 1];

    if (
      (c1 === keys[2] && c2 !== keys[2]) ||
      (c1 !== keys[2] && c2 === keys[2])
    ) {
      valid++;
    }
  }
  console.log(valid);
}

processLineByLine();
processLineByLine2();
