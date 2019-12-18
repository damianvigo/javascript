class Toggable {
  constructor(el) {
    // inicializar el estado interno
    this.el = el;
    this.el.innerHTML = 'Off';
    this.activated = false;
    this.el.addEventListener('click', this.onClick.bind(this));
  }

  onClick(ev) {
    // cambiar el estado interno
    // llamar a toggleText
    this.activated = !this.activated;
    this.toggleText();
  }

  toggleText() {
    // cambiar el texto
    this.el.innerHTML = this.activated ? 'On' : 'Off';
  }
}

const button = document.getElementById('boton');

const miBoton = new Toggable(button);
