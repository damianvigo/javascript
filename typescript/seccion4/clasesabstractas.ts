abstract class Padre {
  abstract caminar(): void;
  abstract gatear(): void;

  saludar(saludo): string {
    return saludo;
  }
}

class Hijo extends Padre {
  caminar(): void {
    console.log();
  }

  gatear(): void {
    console.log();
  }
}

class OtraClase extends Padre {
  caminar(): void {
    console.log();
  }

  gatear(): void {
    console.log();
  }
}
