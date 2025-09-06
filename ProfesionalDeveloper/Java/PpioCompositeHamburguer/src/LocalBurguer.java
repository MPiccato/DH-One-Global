import java.util.ArrayList;
import java.util.List;

public class LocalBurguer {

    private List<Product> productCart;

    public LocalBurguer(){
        productCart = new ArrayList<>();
    }

    public void addProduct(Product product){
        productCart.add(product);
    }

    public Double calculateCartPrice(){
        Double subTotal = 0.0;
        for(Product item: productCart){
            subTotal += item.calculateTotal();
        }
        return subTotal;
    }
}
