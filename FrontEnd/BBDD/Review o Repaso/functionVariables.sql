use EMarket;

DELIMITER &&
CREATE FUNCTION promedioDosNum(valor1 INT, valor2 INT)
RETURNS FLOAT deterministic
BEGIN
	DECLARE promedio FLOAT;
    SET promedio = (valor1 + valor2) / 2;
    RETURN promedio;
END
&& DELIMITER &&;

SELECT promedioDosNum(2,3);
