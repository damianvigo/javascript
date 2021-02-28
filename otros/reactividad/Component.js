const Component = (function () {
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  // Metodos al prototipo del constructor componente
  // Render UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  // Actualizacion del state de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  // Obtengo una copia inmutable del State
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
