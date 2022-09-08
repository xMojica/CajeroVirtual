//Declarar variables
let nombreUsuario = "Santiago Mojica";
let saldoCuenta = 50000;
let limiteExtraccion = 500;
let claveCorrecta = 0000;

//Llamado de funciones
iniciarSesion();

document.getElementById("extraer").onclick = function () {
    ExtraerDinero();
}
document.getElementById("depositar").onclick = function () {
    DepositarDinero();
}
document.getElementById("pagar").onclick = function () {

}
document.getElementById("transferir").onclick = function () {

}
document.getElementById("limite").onclick = function () {
    cambiarLimiteDeExtraccion();
}

