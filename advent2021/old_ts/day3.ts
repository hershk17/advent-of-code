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

function filter_data_by_index(
  data: string[],
  idx: number,
  mostCommon: boolean = true
) {
  if (data.length === 1) {
    return data[0];
  }

  let cnt: number = 0;
  for (const line of data) {
    cnt += Number(line[idx]);
  }

  let filtered: string[] = [];
  if (mostCommon) {
    for (const line of data)
      if (Number(line[idx]) === Number(cnt >= data.length / 2))
        filtered.push(line);
  } else {
    for (const line of data)
      if (Number(line[idx]) !== Number(cnt >= data.length / 2))
        filtered.push(line);
  }
  return filter_data_by_index(filtered, idx + 1, mostCommon);
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day3.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data: string[] = [];
  let cnt: number = 0;
  for await (const line of rl) {
    data.push(line);
    cnt++;
  }

  console.log(
    parseInt(filter_data_by_index(data, 0), 2) *
      parseInt(filter_data_by_index(data, 0, false), 2)
  );
}

// processLineByLine();
processLineByLine2();
