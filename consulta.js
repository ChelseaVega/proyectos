// Obtener los elementos de formulario por su ID
const tamaños = document.getElementById('tamaños');
const pizza1 = document.getElementById('pizza1');
const pizza2 = document.getElementById('pizza2');
const pizza3 = document.getElementById('pizza3');
const pizza4 = document.getElementById('pizza4');
const pizza5 = document.getElementById('pizza5');
const enviarpedido = document.getElementById('enviarpedido');

// Agregar un evento al botón de enviar pedido
enviarpedido.addEventListener("click", () => {
  // Obtener los valores seleccionados por el usuario
  const tamanoSeleccionado = tamaños.value;
  const pizza1Seleccionada = pizza1.value;
  const pizza2Seleccionada = pizza2.value;
  const pizza3Seleccionada = pizza3.value;
  const pizza4Seleccionada = pizza4.value;
  const pizza5Seleccionada = pizza5.value;

  // Validar si algún campo está vacío
  if (
    tamanoSeleccionado === 'Tamaños de pizza' ||
    pizza1Seleccionada === 'Ingredientes' ||
    pizza2Seleccionada === 'Ingredientes' ||
    pizza3Seleccionada === 'Ingredientes' ||
    pizza4Seleccionada === 'Ingredientes' ||
    pizza5Seleccionada === 'Ingredientes'
  ) {
    // Mostrar un mensaje de error en una ventana emergente
    alert("Por favor, debe elegir el tamaño de la pizza y los ingredientes.");
    return;
  }

  // Calcular el precio total de la pizza
  let precioTotal = 0;

  if (tamanoSeleccionado === "1") {
    const manodeobra = 2;
    precioTotal = (3 + 0.30 + manodeobra) * 1.50;

    precioTotal += (pizza1Seleccionada !== "Ingredientes") ? 0.5 : 0;
    precioTotal += (pizza2Seleccionada !== "Ingredientes") ? 0.5 : 0;
    precioTotal += (pizza3Seleccionada !== "Ingredientes") ? 0.5 : 0;
    precioTotal += (pizza4Seleccionada !== "Ingredientes") ? 0.5 : 0;
    precioTotal += (pizza5Seleccionada !== "Ingredientes") ? 0.5 : 0;

    // Mostrar el precio total por pantalla
    alert(`El precio total de su pedido es de $${precioTotal.toFixed(2)}`);

  } else if (tamanoSeleccionado === "2") {
    const manodeobra = 2;
    precioTotal = (4.2 + 0.42 + manodeobra) * 1.50;

    precioTotal += (pizza1Seleccionada !== "Ingredientes") ? 1 : 0;
    precioTotal += (pizza2Seleccionada !== "Ingredientes") ? 1 : 0;
    precioTotal += (pizza3Seleccionada !== "Ingredientes") ? 1 : 0;
    precioTotal += (pizza4Seleccionada !== "Ingredientes") ? 1 : 0;
    precioTotal += (pizza5Seleccionada !== "Ingredientes") ? 1 : 0;

    // Mostrar el precio total por pantalla
    alert(`El precio total de su pedido es de $${precioTotal.toFixed(2)}`);

  } else if (tamanoSeleccionado === "3") {
    const manodeobra = 2;
    precioTotal = (4.8 + 0.48 + manodeobra) * 1.50;

    precioTotal += (pizza1Seleccionada !== "Ingredientes") ? 2 : 0;
    precioTotal += (pizza2Seleccionada !== "Ingredientes") ? 2 : 0;
    precioTotal += (pizza3Seleccionada !== "Ingredientes") ? 2 : 0;
    precioTotal += (pizza4Seleccionada !== "Ingredientes") ? 2 : 0;
    precioTotal += (pizza5Seleccionada !== "Ingredientes") ? 2 : 0;

    // Mostrar el precio total por pantalla
    alert(`El precio total de su pedido es de $${precioTotal.toFixed(2)}`);
  }
});
