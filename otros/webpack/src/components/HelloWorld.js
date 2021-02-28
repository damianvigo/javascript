export class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hola Webpack con ${this.name}!`;
  }
}