use EMarket;

SELECT ClienteID, transporte, 
 IF (transporte < 33, 'Distancia Corta', 'Distancia Media') as Distancia
from facturas;

select * from FacturaDetalle;

select ProductoID,PrecioUnitario, Cantidad, 
	case
		when Cantidad < 10 then 'poco'
        when Cantidad > 20 then 'muy bien'
        when Cantidad < 5 then 'muy poco'
        else 'Cliente Normal' end as CalidadCliente
from FacturaDetalle;

/* CONDICIONALES EN STORES PROCEDURES */

DELIMITER $$
CREATE FUNCTION divisionNumeros (val1 INT, val2 INT)
RETURNS FLOAT DETERMINISTIC
BEGIN
	DECLARE total FLOAT default 0;
    IF val2 <> 0 then
		SET total = val1/val2;
	END IF;
	
    return total;
END;
DELIMITER;

SELECT divisionNumeros(2,2);

/* CASE EN STORE PROCEDURES */

DELIMITER $$
CREATE FUNCTION valNumeros(val INT)
RETURNS VARCHAR(25) DETERMINISTIC
BEGIN
	DECLARE estilo VARCHAR(25);
    CASE 
		WHEN val <= 1 THEN SET estilo = 'bajito';
        WHEN val <= 5 THEN SET estilo = 'MEDIO';
        WHEN val <= 9 THEN SET estilo = 'ALTO';
        ELSE SET estilo = 'indefinido';
	END CASE;
    RETURN estilo;
END;
DELIMITER;

SELECT valNumeros(5);

DROP FUNCTION numEnteros;
DROP FUNCTION valNumeros;

