// This week’s question:
// Given a string of any length which contains only digits from 0 to 9, replace each consecutive run of the digit 0 with its length.

// > replaceZeros('1234500362000440')
// > 1234523623441
// > replaceZeros('123450036200044')
// > 123452362344
// > replaceZeros('000000000000')
// > 12
// > replaceZeros('123456789')
// > 123456789

function replaceZeros(str) {
  const strArr = str.split('');
  const replaced = [];
  let count = 0;  
  strArr.forEach((s) => {
    if(s === '0') {
      count++;
    } else {      
      if(count > 0) {
        replaced.push(count.toString());
        count = 0;
      }
      replaced.push(s);
    }      
  });
  if(count > 0) {
    replaced.push(count.toString());    
  }
  return replaced.join('');
}

console.log(replaceZeros('1234500362000440'));
console.log(replaceZeros('123450036200044'));
console.log(replaceZeros('000000000000'));
console.log(replaceZeros('123456789'));
