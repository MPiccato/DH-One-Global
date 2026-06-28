use EMarket;

Select * from Clientes where Pais = "Argentina";
Select * from Clientes where Contacto like "%Patricio%";

use musimundos;

select * from clientes;
select id, primer_nombre, apellido from clientes where primer_nombre = "Luis";

update clientes set apellido = "Piccato" where id = 1;

/* Sentencia Delete */

delete from clientes where id = 1;

delete from clientes where email = "mpiccato@mail.com";


/* FUNCIONES DE AGREGACION */

select count(id) from clientes; 

select * from productos;

select max(preciounitario) from productos where categoriaid = 2;
select productonombre, unidadesstock from productos where categoriaid = 2;

select categoriaid as TipoProducto, count(ProductoID) as Cantidad, AVG(PrecioUnitario) as PrecioPromedio from Productos group by CategoriaID;

select * from correos;

/* JOINS */

select * from productos;
select * from clientes;
select * from facturas;

select count(clientes.compania) as c from clientes left join facturas on clientes.clienteid = facturas.clienteid;

