public class ProductTicket {

    private String productName;
    private Integer quantity;
    private Double pricePerProduct;

    public ProductTicket(String productName, Integer quantity, Double pricePerProduct) {
        this.productName = productName;
        this.quantity = quantity;
        this.pricePerProduct = pricePerProduct;
    }

    public  Double calculateTicketTotal(){
        return quantity * pricePerProduct;

    }


}
