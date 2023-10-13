// Generamos un numero mágico:
let numeroMagico = parseInt(Math.random() * 100);
console.log(numeroMagico);

// Traemos los nodos del HTML
const input = document.querySelector('#numero-usuario');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#result');
const btnReload = document.querySelector('#btn-reload');
const date = document.querySelector('#year');

// Agregamos el evento click para comparar valores del usuario con número mágico
btn.addEventListener('click', () => {
  console.log(input.value);

  let numeroUsuario = parseInt(input.value);

  if (numeroUsuario <= 100 && numeroUsuario >= 0) {
    console.log(typeof numeroUsuario);
    if (numeroUsuario === numeroMagico) {
      resultado.innerText = 'Has adivinado el número mágico. Felicidades!!!';
      input.value = '';

      document.querySelector('body').classList.remove('failure');
      document.querySelector('body').classList.add('success');

      document.querySelector('#btn-reload').classList.add('success-reload');
    } else if (numeroUsuario > numeroMagico) {
      resultado.innerText = 'El numero magico es menor que ' + numeroUsuario;
      input.value = '';
      document.querySelector('body').classList.remove('success');
      document.querySelector('body').classList.add('failure');
    } else if (numeroUsuario < numeroMagico) {
      resultado.innerText = 'El numero mágico es mayor que ' + numeroUsuario;
      input.value = '';
      document.querySelector('body').classList.remove('success');
      document.querySelector('body').classList.add('failure');
    }
  } else {
    resultado.innerText =
      'Valor fuera de los parámetros, introduce un número entre 0 y 100';
    input.value = '';
    document.querySelector('body').classList.remove('success');
    document.querySelector('body').classList.remove('failure');
  }
});

// Recargamos la página al ganar el usuario:
btnReload.addEventListener('click', () => {
  location.reload();
});

// Cambiamos la fecha del footer a la actual
const dateNow = new Date();
const now = dateNow.getFullYear();

const changeYear = () => {
  date.textContent = now;
};

changeYear();
