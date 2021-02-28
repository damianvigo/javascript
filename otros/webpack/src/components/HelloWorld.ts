export class HelloWorld {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return `Hola Webpack con ${this.name}!`;
  }
}