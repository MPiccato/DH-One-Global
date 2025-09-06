import java.util.ArrayList;
import java.util.List;

public class ProductCombo extends Product{

    private List<Product> productList;
    private Double discount;

    public ProductCombo(String name, Double discount) {
        super(name);
        productList = new ArrayList<>();
        this.discount = discount;
    }

    public void addProduct(Product item){
        productList.add(item);
    }

    @Override
    public Double calculateTotal(){
        Double subTotal = 0.0;

        for(Product product: productList){
            subTotal += product.calculateTotal();
        }
        Double finalTotal = subTotal - (subTotal * discount);
        return finalTotal;
    }
}
