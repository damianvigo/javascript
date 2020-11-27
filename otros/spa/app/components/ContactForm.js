export function ContactForm() {
  const d = document,
    $form = d.createElement('form'),
    $styles = d.getElementById('dynamic-styles');

    $form.classList.add('contact-form');

    $styles.innerHTML = `
    /* Contacto - Validacion - Formulario */
    .contact-form {
      --form-ok-color: #4caf50;
      --form-error-color: #f44336;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }

    .contact-form>* {
      padding: 0.5rem;
      margin: 1rem auto;
      display: block;
      width: 100%;
    }

    .contact-form textarea {
      resize: none;
    }

    .contact-form legend,
    .contact-form-response {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1rem;
      font-family: sans-serif;
    }

    .contact-form input[type='submit'] {
      width: 50%;
      font-weight: bold;
      cursor: pointer;
    }

    .contact-form *::placeholder {
      color: #000;
    }

    /* Validaciones con css. Valid e Invalid */

    /* Va a validar que un elemento tenga el atributo required, su contenido sea valido y que este dentro de contact-form  */
    .contact-form [required]:valid {
      border: thin solid var(--form-ok-color);
    }

    .contact-form [required]:invalid {
      border: thin solid var(--form-error-color);
    }

    /* Mensaje dinamico con js */
    .contact-form-error {
      margin-top: -1rem;
      /* -1rem para que este pegado al input */
      font-size: 80%;
      background-color: var(--form-error-color);
      color: #fff;
      transition: all 800ms ease;
    }

    .contact-form-error.is-active {
      display: block;
      animation: show-message 1s 1 normal 0s ease-out both;
    }

    .contact-form-loader {
      text-align: center;
    }

    .none {
      display: none;
    }

    @keyframes show-message {
      0% {
        visibility: hidden;
        opacity: 0;
      }

      100% {
        visibility: visible;
        opacity: 1;
      }
    }
    `;

  $form.innerHTML = `
    <legend>Envíanos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu nombre"
      title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
      pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <input type="text" name="subject" placeholder="Asunto a tratar" required title="El Asunto es requerido">
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" required
      data-pattern="^.{1,255}$" title="Tu comentario no debe exceder los 255 caracteres"></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
      <img src="../assets/ball-triangle.svg" alt="Cargando">
    </div>
    <div class="contact-form-response none">
      <p>Los datos han sido enviados</p>
    </div>
    `

    function validationsForms() {
      const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]');
      // console.log($inputs);

      /* por cada input requerido voy a crear un span dinamico */
      $inputs.forEach((input) => {
        const $span = d.createElement('span');
        $span.id = input.name; /* atributo name unicos */
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none');
        /* insertar inmediatamente abajo del input */
        input.insertAdjacentElement('afterend', $span);
      });

      /* validaciones mientras el usuario va introduciendo sus datos en el formulario de va validando, mas interactivo, me gusta mas */
      d.addEventListener('keyup', (e) => {
        if (e.target.matches('.contact-form [required]')) {
          let $input = e.target,
            /* Si viene un input valida la primera, si viene text-area el primero valida null pero lo de la derecha si lo tiene */
            pattern = $input.pattern || $input.dataset.pattern;
          // console.log($input, pattern);
          if (pattern && $input.value !== '') {
            // console.log('El input TIENE patron');
            let regex = new RegExp(pattern);
            /* Si el valor del input no cumple con la expresion regular */
            return !regex.exec($input.value)
              ? /* capturando el id del span creado dinamicamente */
              d.getElementById($input.name).classList.add('is-active')
              : d.getElementById($input.name).classList.remove('is-active');
          }

          /* asunto a tratar no tiene patron */
          if (!pattern) {
            // console.log('El input NO tiene patron');
            return $input.value === ''
              ? /* capturando el id del span creado dinamicamente */
              d.getElementById($input.name).classList.add('is-active')
              : d.getElementById($input.name).classList.remove('is-active');
          }
        }
      });

      /* Proceso de formulario */
      d.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Enviando Formulario');

        const $loader = d.querySelector('.contact-form-loader'),
          $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none');

        fetch('https://formsubmit.co/ajax/damiandanielvigo@gmail.com', {
          method: 'POST',
          body: new FormData(e.target)
        })
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .then(json => {
            console.log(json);
            $loader.classList.add('none');
            $response.classList.remove('none');
            $response.innerHTML = `<p>${json.message}</p>`;
            $form.reset();
          })
          .catch(err => {
            console.log(err);
            let message = err.statusText || 'Ocurrio un error al enviar, intenta nuevamente';
            $response.innerHTML = `<p>Error: ${err.status}: ${message}<p/>`;
          })
          .finally(() => {
            setTimeout(() => {
              $response.classList.add('none');
              $response.innerHTML = '';
            }, 3000);
          });
      });
    }

    setTimeout(() => {
      validationsForms();
    }, 100);

  return $form;
}