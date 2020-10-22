# Tienda online con Angular

Aplicación con dos secciones/rutas
how it works: sección informativa
productos: sección o componente con los productos de nuestra tienda


El componente Productos, debe hacer un listing desde un servicio externo.

PRO
Página producto que abre el producto concreto mediante ID

## Ampliación tienda online

crea un componente product-card, que tenga una caja/tarjeta de producto.

Haz uso del mismo desde la vista del productsComponent (/products o /productos)

Haz llegar al componente product-card, el nombre del producto mediante la directiva @input que hemos visto. 

### PRO
Crea una propiedad en tu array de productos que se llame quantity/cantidad.
Crea un botón “añadir unidad” en el product-card que incremente las unidades del producto clicado en +1. * Utiliza la directiva @Output.
