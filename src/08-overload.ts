// Gian => [G,i,a,n]
// [G,i,a,n] => Gian

function parseString(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join(''); //string
  }else{
    return input.split(''); //string[]
  }
}

console.log(parseString('Gian'));
console.log(parseString(['G','i','a','n']));












