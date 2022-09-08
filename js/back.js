
//Funciones de back
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

function ExtraerDinero() {
    let ExtraerDinero = prompt("Cuanto dinero desea extraer? ");
    if(isNaN(ExtraerDinero) || ExtraerDinero == 0){
        alert("Digite un valor valido");
    }else{
        if (ExtraerDinero > limiteExtraccion) {
            alert("El monto a retirar supera el limite $" + limiteExtraccion);
        } else {
            let saldoActual = saldoCuenta - ExtraerDinero
            saldoCuenta = saldoActual;
            alert("Su extraccion exitosa");
            actualizarSaldo();
        }
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

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}
function saldo() {
    document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoCuenta;
}
function limite() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}