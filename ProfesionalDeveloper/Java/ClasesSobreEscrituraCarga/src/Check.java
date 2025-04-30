public class Check extends BankAccount {
    private String checkOwner;
    private Double amount;

    public Check(String accountAwner, String checkOwner, Double amount){
        super(accountAwner);
        this.checkOwner = checkOwner;
        this.amount = amount;
    }

    public Double getAmount(){
        return amount;
    }
}
