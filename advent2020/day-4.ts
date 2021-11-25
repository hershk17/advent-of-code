import fs = require("fs");
import readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputs/day-4.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let passports: string[][] = [];
  let data: string[] = [];
  for await (const line of rl) {
    if (line !== "") {
      let fields: string[] = line.split(" ");
      for (let field of fields) {
        data.push(field);
      }
    } else {
      passports.push(data);
      data = [];
    }
  }
  passports.push(data);

  const requirements: string[] = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
  ];

  let valid: number = 0;
  for (const passport of passports) {
    let isValid: boolean = false;
    for (const req of requirements) {
      for (const field of passport) {
        isValid = false;
        if (field.split(":")[0] === req) {
          isValid = true;
          break;
        }
      }
      if (!isValid) {
        break;
      }
    }
    if (isValid) {
      valid++;
    }
  }
  console.log(valid);
}

async function processLineByLine2() {
  const fileStream = fs.createReadStream("inputs/day-4.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let passports: string[][] = [];
  let data: string[] = [];
  for await (const line of rl) {
    if (line !== "") {
      let fields: string[] = line.split(" ");
      for (let field of fields) {
        data.push(field);
      }
    } else {
      passports.push(data);
      data = [];
      break;
    }
  }
  passports.push(data);

  const requirements: string[] = [
    "iyr",
    "byr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
  ];

  let valid: number = 0;
  for (const passport of passports) {
    let isValid: boolean = false;
    // console.log(passport)
    for (const req of requirements) {
      for (const field of passport) {
        isValid = false;
        let item: string[] = field.split(":");
        console.log(item);
        if (item[0] === req) {
          console.log("ok");
          switch (item[0]) {
            case "byr":
              if (
                item[1].length == 4 &&
                Number(item[1]) >= 1920 &&
                Number(item[1]) <= 2002
              ) {
                isValid = true;
              } else {
                isValid = false;
              }
              break;
            case "iyr":
              if (
                item[1].length == 4 &&
                Number(item[1]) >= 2010 &&
                Number(item[1]) <= 2020
              ) {
                isValid = true;
              } else {
                isValid = false;
              }
              break;
            case "eyr":
              if (
                item[1].length == 4 &&
                Number(item[1]) >= 2020 &&
                Number(item[1]) <= 2030
              ) {
                isValid = true;
              } else {
                isValid = false;
              }
              break;
            case "hgt":
              if (!isNaN(Number(item[1]))) {
                if (
                  (item[1].includes("cm") &&
                    Number(item[1]) >= 150 &&
                    Number(item[1]) <= 193) ||
                  (item[1].includes("in") &&
                    Number(item[1]) >= 59 &&
                    Number(item[1]) <= 76)
                ) {
                  isValid = true;
                } else {
                  isValid = false;
                }
              } else {
                isValid = false;
              }
              break;
            case "hcl":
              if (item[1].length == 7 && /^[a-f0-9]+$/.test(item[1])) {
                isValid = true;
              } else {
                isValid = false;
              }
              break;
            case "ecl":
              if (
                item[1] == "amb" ||
                item[1] == "blu" ||
                item[1] == "brn" ||
                item[1] == "gry" ||
                item[1] == "grn" ||
                item[1] == "hzl" ||
                item[1] == "oth"
              ) {
                isValid = true;
              } else {
                isValid = false;
              }
              break;
            case "pid":
              if (!isNaN(Number(item[1])) && item[1].length == 9) {
                isValid = true;
              } else {
                isValid = false;
              }
              break;
            default:
              isValid = false;
              break;
          }
          break;
        }
        if (!isValid) {
          break;
        }
      }
      if (!isValid) {
        break;
      }
    }
    if (isValid) {
      valid++;
    }
  }
  console.log(valid);
}

// processLineByLine();
processLineByLine2();
