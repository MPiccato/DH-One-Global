use EMarket;
/* LOOPS */

DELIMITER $$
CREATE PROCEDURE sayHola(veces INT)
BEGIN
	DECLARE fin INT DEFAULT 1;
    myBucle: LOOP
		SELECT 'HOLA';
        SET fin = fin + 1;
        IF fin >= veces THEN
		LEAVE myBucle;
		END IF;
	END LOOP;
END;
DELIMITER;

DROP PROCEDURE sayHola;

call sayHola(4);

DELIMITER &&
CREATE PROCEDURE sayHello(veces INT)
BEGIN
	DECLARE contador INT DEFAULT 1;
    WHILE contador < veces DO
		SELECT 'HOLA';
        SET contador = contador + 1;
	END WHILE;
END;
DELIMITER;

drop procedure sayHello;

CALL sayHello(4)

        
	