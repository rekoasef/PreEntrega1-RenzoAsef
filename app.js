console.log('¡Hola! Bienvenido a "MiTienda"');
let producto;
let categoria;
let IVA = 1.21;

function categorias() {
    categoria = parseInt(prompt(`Ingrese el Número de la categoria que desee ingresar
    1. Electrodomesticos
    2. Comida`));
}

function seleccionCategoria() {
    categorias();
    if (categoria !== null && categoria > 0 && categoria < 3) {
        switch (categoria) {
            case 1:
                producto = parseInt(prompt(`Ingrese el numero del producto que desee saber el precio
                1. Televisor LED 42"
                2. Iphone 15 pro max
                3. Macbook Air 13`));
                break;
            case 2:
                producto = parseInt(prompt(`Ingrese el numero del producto que desee saber el precio
                1. Fideos
                2. Vacio
                3. Chorizos`));
                break;
            default:
                console.error("Categoria no válida");
        }
    } else {
        console.warn("Ingrese un número válido");
    }
}

function precioProductos(){
    seleccionCategoria()
    if (categoria == 1){
        switch (producto) {
            case 1:
                let precioTele = 180000 * IVA
                alert("El precio del Televisor es: $" + precioTele)
                break;
            case 2:    
                let precioIphone = 950000 * IVA
                alert("El precio del Iphone es: $" + precioIphone)
                break;
            case 3:
                let precioMac = 1250000 * IVA
                alert("El precio de la Macbook es: $" + precioMac)
                break;
            default:
                console.warn("Producto no disponible")
                break;
        }
    }else if (categoria == 2){
        switch (producto) {
            case 1:
                let precioFideos = 350 * IVA;
                alert("El precio de los fideos es: $" + precioFideos)
                break;
            case 2:
                let precioVacio = 3000 * IVA;
                alert("El precio del kilo de vacio es: $" + precioVacio)
                break;
            case 3:
                let precioChorizo = 2000 * IVA;
                alert("El precio del kilo de chorizo es: $" + precioChorizo)
                break;         
        
            default:
                break;
        }
    }

}
precioProductos()
