import java.util.ArrayList;
import java.util.List;

public class Shop {

    public List<Item> itemList;

    public Shop(){
        itemList = new ArrayList<>();
    }

    public void addItem(Item item) {
        itemList.add(item);
    }

    public Double calculateTotal(){
        Double totalFacturado = 0.0;
        for (Item item: itemList){
            totalFacturado += item.getPrice();

        }

        return totalFacturado;

    }
}
