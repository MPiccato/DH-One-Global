public class ItemFactory {

    private static ItemFactory instance;

    private ItemFactory(){};

    public static ItemFactory getInstance(){

        if (instance == null){
            instance = new ItemFactory();
        }

        return instance;
    }

    public Item createItem(Integer id) {

        switch (id) {
            case (1):
                return new Item("Hamburguesa", 5.0);
            case (2):
                return new Item("Pizza Muzzarella", 12.4);
            case (3):
                return new Item("Empanadas de Carne", 18.4);
        }
        return null;

    }

}
