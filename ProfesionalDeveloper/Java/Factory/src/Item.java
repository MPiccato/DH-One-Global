public class Item {

    private String name;
    private Double price;

    public Item(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    public String getItemName(){
        return name;
    }
    public Double getPrice(){
        return price;
    }
}
