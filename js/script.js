// Función de bienvenida para la tienda de ropa y calzado
function saludarTienda() {
    alert("Bienvenido a nuestra tienda de ropa y calzado");
}

// Variables para la tienda de ropa y calzado
let productos = [
    { categoria: "Remeras", nombre: "Remera Lisa", precio: 6000 },
    { categoria: "Remeras", nombre: "Remera Estampada", precio: 6500 },
    { categoria: "Remeras", nombre: "Remera con Cuello", precio: 7000 },
    { categoria: "Pantalones", nombre: "Pantalón Jeans", precio: 7000 },
    { categoria: "Pantalones", nombre: "Pantalón Deportivo", precio: 6500 },
    { categoria: "Pantalones", nombre: "Pantalón Casual", precio: 6800 },
    { categoria: "Zapatillas", nombre: "Zapatillas Urbanas", precio: 5000 },
    { categoria: "Zapatillas", nombre: "Zapatillas Deportivas", precio: 5500 },
    { categoria: "Zapatillas", nombre: "Zapatillas de Running", precio: 6000 }
];

let carrito = [];
let total = 0;

// función de bienvenida a la tienda
saludarTienda();

while (true) {
    let seleccion = prompt(`Elige una categoría de productos:\n\n1. Remeras\n2. Pantalones\n3. Zapatillas\n\nPara salir, escribe "salir"`);

    if (seleccion === "salir") {
        break;
    }

    if (seleccion === "1" || seleccion === "2" || seleccion === "3") {
        let categoria = getCategoria(seleccion);
        mostrarProductos(productos, categoria);
        let indice = parseInt(prompt("Elige un producto por su número:"));

        if (indiceValido(indice, productos, categoria)) {
            let productoSeleccionado = productos[indice - 1];
            total += productoSeleccionado.precio;
            carrito.push(productoSeleccionado);
            alert(`${productoSeleccionado.categoria} - ${productoSeleccionado.nombre} agregado al carrito.\n\nPrecio total: $${total}`);
        } else {
            alert("Selección no válida, vuelva a intentar.");
        }
    } else {
        alert("Selección no válida, vuelva a intentar.");
    }
}

if (carrito.length > 0) {
    alert(`Gracias por tus compras. Aquí está tu carrito:\n\n${carrito.map((producto) => `${producto.categoria} - ${producto.nombre}`).join("\n")}\n\nPrecio total: $${total}`);
} else {
    alert("No has realizado ninguna compra.");
}

function mostrarProductos(productos, categoria) {
    alert(`Productos disponibles en la categoría "${categoria}":\n\n` +
        productos
            .filter(producto => producto.categoria === categoria)
            .map((producto, indice) => `${indice + 1}. ${producto.nombre} - $${producto.precio}`)
            .join("\n"));
}

function getCategoria(seleccion) {
    if (seleccion === "1") {
        return "Remeras";
    } else if (seleccion === "2") {
        return "Pantalones";
    } else if (seleccion === "3") {
        return "Zapatillas";
    }
    return "";
}

function indiceValido(indice, productos, categoria) {
    return !isNaN(indice) && indice >= 1 && indice <= productos.filter(producto => producto.categoria === categoria).length;
}