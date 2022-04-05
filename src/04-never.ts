//Never type: funciones que nunca terminan
//ver: https://apuntes.de/typescript/never/
const withoutEnd = () => {
  while(true){
    console.log('nunca parar de aprender')
  }
}

const fail = (message: string):never => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string'){
    return 'Es string';
  }else if(Array.isArray(input)){
    return 'Es array';
  }
  return fail('no hizo match');
}

console.log(example('hola'));
console.log(example([1,2,3]));
console.log(example(10)); //detiene
console.log(example('esto desps del fail')); //nunca llega aca


