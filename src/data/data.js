export const productos = [
    {
        id: 0,
        categoria: 'Informática',
        descripción: 'Poco uso - SO. 2022',
        name: 'All in One',
        imgUrl: 'https://www.tecnogeek.com/images/notas13/c205/c205-01.jpg',
        precio: '100',
        stock: '3'
    },
    {
        id: 1,
        categoria: 'Cuidado Personal',
        descripción: 'Sin uso',
        name: 'Bici Fija',
        imgUrl: 'http://ranbak.com.ar/timthumb.php?src=/archivos/productos/16015129521515_400n2.jpg&h=1000&w=1000',
        precio: '100',
        stock: '4'

    },
    {
        id: 2,
        categoria: 'Decoración',
        descripción: '80cm x 80cm',
        name: 'Espejo Madera',
        imgUrl: 'https://www.elmueble.com/medio/2021/12/24/espejo-cuadrado-madera-la-redoute_b303b7b5_1200x1200.jpeg',
        precio: '100',
        stock: '3'
    },
    {
        id: 3,
        categoria: 'Informática',
        descripción: 'Led - 17 pulgadas',
        name: 'Monitor Samsung',
        imgUrl: 'https://www.computershopping.com.ar/Images/Productos/Grandes/732nw_g.jpg',
        precio: '100',
        stock: '5'
    }, {
        id: 4,
        categoria: 'Informática',
        descripción: '1Tb - Con 10 Juegos - 2 Joystick',
        name: 'PlayStation 4',
        imgUrl: 'https://www.necxus.com.ar/products_image/12720/1000x1000_1.jpg',
        precio: '100',
        stock: '4'
    }, {
        id: 5,
        categoria: 'Informática',
        descripción: '10 Juegos - 2 Joystick',
        name: 'PlayStation 3',
        imgUrl: 'https://raw.githubusercontent.com/inafontan/ventadewhatsapp/04d7c28d503b55fc6abc37e574713b5211b56978/src/imagenes/play3.jpg',
        precio: '100',
        stock: '2'
    }, {
        id: 6,
        categoria: 'Audio & Video',
        descripción: 'Mini Proyector Portatil Led - 1200 Lumenes',
        name: 'Proyector',
        imgUrl: 'https://raw.githubusercontent.com/inafontan/ventadewhatsapp/04d7c28d503b55fc6abc37e574713b5211b56978/src/imagenes/proyector.jpg',
        precio: '100',
        stock: '3'
    }, {
        id: 7,
        categoria: 'Electrodomésticos',
        descripción: 'Ventilador 3 posiciones',
        name: 'Ventilador de Pie',
        imgUrl: 'https://raw.githubusercontent.com/inafontan/ventadewhatsapp/04d7c28d503b55fc6abc37e574713b5211b56978/src/imagenes/ventiladorpie.jpg',
        precio: '100',
        stock: '5'
    }, {
        id: 8,
        categoria: 'Electrodomésticos',
        descripción: 'Batidora Planetaria',
        name: 'Batidora Smartlife',
        imgUrl: 'https://images.fravega.com/f1000/c478984bef2d7ddfecdf0aa5910eb7a1.jpg',
        precio: '100',
        stock: '3'
    }, {
        id: 9,
        categoria: 'Electrodomésticos',
        descripción: 'Cafetera Expresso',
        name: 'Cafetera DeLonghi',
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_686743-MLA31012305360_062019-O.webp',
        precio: '100',
        stock: '3'
    }, {
        id: 10,
        categoria: 'Electrodomésticos',
        descripción: 'Cafetera Nespresso - Manual',
        name: 'Cafetera Nespresso - Cápsulas',
        imgUrl: 'https://www.aquicompro.com.py/wp-content/uploads/2020/07/Cafetera-Piccolo-Moulinex-1.100.000.jpg',
        precio: '100',
        stock: '3'
    }, {
        id: 11,
        categoria: 'Audio & Video',
        descripción: 'TV 32 Pulgadas - TCL',
        name: 'Tv TCL',
        imgUrl: 'https://mobile-support.tcl.com/content/dam/tcl-dam/product/tv-product/a-series/a323-mx/site/pc/product-image/A323%2032_.png',
        precio: '100',
        stock: '3'
    }, {
        id: 12,
        categoria: 'Decoración',
        descripción: 'Espejo Redondo',
        name: 'Espejo Hierro',
        imgUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/250/736/products/espejo-pvc-negro1-e1e726e19ede5acb9415933080002663-640-0.png',
        precio: '100',
        stock: '3'
    },


]

const task = new Promise((resp) => {
    resp(productos)
}, 1000)

export const getItems = () => {
    return task
}
