const limit = 8;
let result = "";
for (let i = 0; i < limit; i++) {
  for (let j = 0; j < limit; j++) {
    if (i % 2 !== 0) {
      result += j % 2 === 0 ? " " : "#";
    } else {
      j % 2 === 0;
      result += j % 2 === 0 ? "#" : " ";
    }
  }
  result += "\n";
}
console.log(result);
