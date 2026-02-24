console.log("Hola");
let y = 0;
let x = 0;
document.addEventListener("keydown", controlTeclas);
function controlTeclas(e) {
  let tecla = e.key;
  if (tecla == "ArrowUp") {
    console.log("Arriba!!!");
    y = y - 10;
    console.log(y);
    document.querySelector("#coco").style.top = y + "px";
  }
  if (tecla == "ArrowDown") {
    console.log("Abajo!!!");
    y = y +10;
    console.log(y);
    document.querySelector("#coco").style.top = y + "px";
  }
  if (tecla == "ArrowLeft") {
    console.log("Izquierda!!");
    x = x -10;
    console.log(x);
    document.querySelector("#coco").style.left = x + "px";
  }
  if (tecla == "ArrowRight") {
    console.log("Derecha!!!");
    x = x +10;
    console.log(x);
    document.querySelector("#coco").style.left = x + "px";
  }
}
// Mover cubo arriba, abajo, derecha, izquierda