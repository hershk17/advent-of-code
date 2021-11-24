import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day-1.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const sumVal: number = 2020;
  let nums: number[] = [];

  for await (const line of rl) {
    nums.push(Number(line));
  }

  for (let num of nums) {
    for (let num2 of nums) {
      if (num + num2 === sumVal) {
        console.log(num * num2);
        return;
      }
    }
  }
}

async function processLineByLine2() {
    const fileStream = fs.createReadStream("inputs/day-1.txt");
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
  
    const sumVal: number = 2020;
    let nums: number[] = [];
  
    for await (const line of rl) {
      nums.push(Number(line));
    }
  
    for (let num of nums) {
      for (let num2 of nums) {
          for(let num3 of nums) {
            if (num + num2 + num3 === sumVal) {
                console.log(num * num2 * num3);
                return;
              }
          }
      }
    }
  }
  
processLineByLine();
processLineByLine2();