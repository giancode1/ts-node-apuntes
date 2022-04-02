let unknowVar: unknown;

unknowVar = 10;
unknowVar = 'Gian';

if(typeof unknowVar === 'string'){
  unknowVar.toUpperCase();
  console.log("unknowVar is a string", unknowVar);
}

//unknown me fuerza a realizar un verificacion de tipo y ahi si me ayuda con el tipado de datos


const parse = (str: string): unknown => {
  return JSON.parse(str);
}
