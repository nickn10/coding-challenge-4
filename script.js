const fs = require('fs');
// ========= PART ONE =======

fs.readFile('./input.txt',(err, data) => {
  if(err) return (err);
  console.time('timer');
  const str = data.toString();
  const up = str.match(/\(/g).length;
  console.timeEnd('timer');
  console.log(up - (str.length - up));
});

// ==========   PART TWO   ==========
fs.readFile('./input-part2.txt',(err, data) => {
  if(err) return (err);
  console.time('timer');
  let floor = 0;
  const str = data.toString();
  let i = 0 ;
  let len = str.length;
  while (floor >=0 || i >= len) {
    str[i] === '(' ? floor++ : floor--;
    i++;
  }
  console.timeEnd('timer');
  console.log(i);
});
