const fs = require('fs');

fs.readFile('./input.txt',(err, data) => {
   console.time('timer');
   if(err) return (err);
   let floor = 0;
   const str = data.toString();
   let i = str.length - 1;
   while (i >=0) {
      str[i] === '(' ? floor++ : floor--;
      i--;
   }
   console.log(floor);
   console.timeEnd('timer'); // 2.7
});
