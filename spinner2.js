let arr = ['|', '/', '-', '\\']
let k = 0
for (let i = 0; i < 500; i++) {
  for (let j = 0; j < arr.length; j++) {
    k += 1;
    setTimeout(() => {
      process.stdout.write(`\r${arr[j]}    `)
    }, 200 * k) 
  }
};
