/* STORE PROCEDURES CON ARGUMENTOS */

DELIMITER $$
CREATE PROCEDURE buscarEntero(num INT)
BEGIN
	SELECT num;
END$$;
DELIMITER ;

-- llamar a un procedimiento

CALL buscarEntero(2);

-- eliminar peocedimiento 
DROP PROCEDURE buscarNombre;