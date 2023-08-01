// 1. Obtener el elemento HTML con el id "ball" y asignarlo a la variable "ball"
let ball = document.getElementById("ball");

// 2. Inicializar las variables para la posición de la pelota (x, y) 
// y las velocidades en las direcciones x e y (dx, dy).
let x = 0;
let y = 0;
let dx = 5;
let dy = 3;

// 3. Definir una función llamada "animate" que se encargará de animar la pelota.
function animate() {
  
  // 4. Solicitar al navegador que ejecute la función "animate" en el próximo cuadro de animación disponible.
  requestAnimationFrame(animate);

  // 5. Lógica para hacer rebotar la pelota en los bordes de la caja.
  x += dx; // Incrementar la posición x de la pelota en la dirección dx.
  y += dy; // Incrementar la posición y de la pelota en la dirección dy.

  // Verificar si la pelota ha alcanzado el borde izquierdo
  // (x < 0) o el borde derecho (x > ancho de la ventana).
  // if (x < 0 || x > window.innerWidth) {
  
  if (x < 0 || x > 200) {
    dx = -dx; // Invertir la dirección en x para hacer que rebote.
  }

  // Verificar si la pelota ha alcanzado el borde superior (y < 0) o el borde inferior (y > altura de la ventana).
  // if (y < 0 || y > window.innerHeight) {
  if (y < 0 || y > 200) {
    dy = -dy; // Invertir la dirección en y para hacer que rebote.
  }

  // 6. Mover la pelota actualizando las propiedades "left" y "top" del estilo CSS del elemento "ball".
  ball.style.left = x + "px"; 
  ball.style.top = y + "px";
  
  // 7. Cambiar el color de fondo de la pelota con un color aleatorio en cada cuadro de animación.
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  ball.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// 8. Iniciar la animación llamando a la función "animate".
animate();


// const ball = document.getElementById('ball');

// let left = 0;
// setInterval(() => {
//   left += 10;
//   ball.style.left = left + 'px';
  
//   if (left >= window.innerWidth) {
//     left = 0;
//   }  
// }, 100);

