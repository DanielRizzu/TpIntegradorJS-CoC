function borrarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").selectedIndex = 0;
    document.getElementById("totalPagar").textContent = "Total a pagar $";
}
function calcDescuento() {
    var cantidadInput = document.getElementById("cantidad");
    var cantidad = parseInt(cantidadInput.value);

    if (isNaN(cantidad)) {
        // Mostrar mensaje de error si el campo de cantidad está vacío
        document.getElementById("totalPagar").textContent = "Por favor, ingrese una cantidad válida";
    } else {
        var categoria = document.getElementById("categoria").value;
        var descuento = 0;

        if (categoria === "estudiante") {
            descuento = 0.8;
        } else if (categoria === "trainee") {
            descuento = 0.5;
        } else if (categoria === "junior") {
            descuento = 0.15;
        }

        var total = cantidad * 200 * (1 - descuento);
        document.getElementById("totalPagar").textContent = "Total a pagar $" + total.toFixed(2);
    }
}
