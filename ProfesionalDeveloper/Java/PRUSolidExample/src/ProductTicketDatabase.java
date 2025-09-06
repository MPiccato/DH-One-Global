import java.util.ArrayList;
import java.util.List;

public class ProductTicketDatabase {

    private List<ProductTicket> productTicketList;

    public ProductTicketDatabase(){
        productTicketList = new ArrayList<>();
    }

    public void addProductTicket(ProductTicket producto){
        productTicketList.add(producto);
    }

    public Double recaudacionDiaria(){
        Double totalRecaudado = 0.0;
        for (ProductTicket ticket: productTicketList){
            totalRecaudado += ticket.calculateTicketTotal();
        }
        return totalRecaudado;
    }
}
