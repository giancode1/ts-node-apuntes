//sobrecarga de funciones, solución
// Gian => [G,i,a,n]
// [G,i,a,n] => Gian

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;


export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join(''); //string
  }else{
    return input.split(''); //string[]
  }
}

console.log(parseStr('Gian').concat('ff'));//ahora si ya me ayuda con el tipo de dato
console.log(parseStr(['G','i','a','n']).charAt(0)); //ahora si ya me ayuda con el tipo de dato












