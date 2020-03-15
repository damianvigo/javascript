const HelloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
}

HelloWorld();
/* console.log(hello);  no puede acceder al scope local */

var scope = 'i am global';

const functionScope = () => {
  var scope = ' i am just a local';
  const func = () => {
    return scope
  }
  console.log(func());
}

functionScope();