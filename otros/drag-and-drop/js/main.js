const d = document,
  $lista = d.getElementById('lista');

Sortable.create(lista, {
  animation: 150,
  chosenClass: 'seleccionado',
  // ghostClass: 'fantasma'
  dragClass: 'drag',

  onEnd: () => {
    console.log('se inserto un elemento');
  },
  group: 'lista-personas',
  store: {
    set: (sortable) => {
      const orden = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, orden.join('|'));
      console.log(orden);
    },

    get: (sortable) => {
      const orden = localStorage.getItem(sortable.options.group.name);
      return orden ? orden.split('|') : [];
    },
  },
});
