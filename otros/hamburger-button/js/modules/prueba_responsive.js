const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  console.log($form);
  let tester;

  d.addEventListener('submit', (e) => {
    // otra forma de detectar quien desencadeno el evento diferente al e.target.matches
    // se compara e.target contra una variable que tengamos almacenados el elemento del dom
    if (e.target === $form) {
      e.preventDefault();
      // alert('formulario enviado');
      tester = window.open($form.direccion.value, 'tester', `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
    }
  });

  d.addEventListener('click', (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
