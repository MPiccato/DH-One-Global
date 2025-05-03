import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {

    private List<Product> productList;

    public  ShoppingCart(){

        productList = new ArrayList<>();

    }

    public void addProduct(Product productName) throws Exception {

        if(productName == null) {
            throw new ShoppingCartExcepcion("debes ponerle nombre");
        }
        productList.add(productName);
    }
}
