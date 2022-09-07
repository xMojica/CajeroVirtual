//Declarar variables
let nombreUsuario = "Santiago Mojica";
let saldoCuenta = 50000;
let limiteExtraccion = 500;
let claveCorrecta = 0000;

function iniciarSesion() {
    let clave = prompt("Digite su clave");
    if (clave == claveCorrecta) {
        alert("Bienvenido " + nombreUsuario);
        document.body.style.display = "block";
        window.onload = function () {
            cargarNombreEnPantalla();
            saldo();
            limite();

        }
    } else {
        saldoCuenta = 50000;
        alert("Su saldo se ha actualizado a cero por seguridad");
    }
}

iniciarSesion();

//Funciones para actualizar el valor de las variables HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}
function saldo() {
    document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoCuenta;
}
function limite() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Llamado de funciones
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

}



//Funciones de back
function ExtraerDinero() {
    let ExtraerDinero = prompt("Cuanto dinero desea extraer? ");
    if (ExtraerDinero > limiteExtraccion) {
        alert("El monto a retirar supera el limite $" + limiteExtraccion);
    } else {
        let saldoActual = saldoCuenta - ExtraerDinero

        saldoCuenta = saldoActual;

        alert("Su extraccion exitosa");
        actualizarSaldo();
    }
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimiteDeExtraccion = parseInt(prompt("Ingrese el nuevo límite de extracción: "));
    if (isNaN(nuevoLimiteDeExtraccion)) {
        return;
    }
    limiteExtraccion = nuevoLimiteDeExtraccion;
    actualizarLimiteEnPantalla();
    alert("Su nuevo limite de extracción es: " + limiteExtraccion);
}

function DepositarDinero() {
    let nuevoDepositoDinero = parseInt(prompt('Cuanto dinero desea depositar: '))
    if (isNaN(nuevoDepositoDinero)) {
        return;
    } else {
        let sumaSaldo = (nuevoDepositoDinero) + (saldoCuenta)
        saldoCuenta = saldoCuenta + nuevoDepositoDinero;
        alert('Su saldo es de ' + saldoCuenta);
        actualizarSaldo();
    }

}


// Actualizar Pantallas
function actualizarSaldo() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
