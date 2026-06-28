/* TRIGGERS - INSERT 
-- Se utiliza para automarizar procesos en bases de datos
-- INSERT, UPDATE, DELETE

*/


DELIMITER $$
CREATE TRIGGER setNewPassword BEFORE INSERT ON users
FOR EACH ROW
BEGIN
	IF NEW.password = '' OR NEW.password IS NULL THEN 
    	SET NEW.password = NEW.email;
	END IF;
END;
DELIMITER;

INSERT INTO users(username, email) VALUES ("MPiccato", "mpiccato@gmail.com");

SELECT * FROM users ORDER BY create_at DESC LIMIT 3;

DROP TRIGGER setNewPassword;

/* TRIGGER UPDATE */

DELIMITER &&
CREATE TRIGGER updateCartsStocks AFTER UPDATE ON products
FOR EACH ROW
BEGIN
	IF NEW.stock = 0 THEN
		UPDATE carts SET quantity = 0 WHERE product_id = OLD.id;
	END IF;
END;
DELIMITER;

DROP TRIGGER updateCartsStocks;

/* TRIGGER DELETE */

DELIMITER $$
CREATE TRIGGER deleteProductCart BEFORE DELETE ON products
FOR EACH ROW
BEGIN
	DELETE FROM carts WHERE product_id = OLD.id;
END;
DELIMITER;

DROP TRIGGER deleteProductCart;



