public class BankAccountOverDraft extends BankAccount {

    private Double extraAmountWithdraw;

    public BankAccountOverDraft(String accountOwner, Double extraAmountWithdraw){
        super(accountOwner);
        this.extraAmountWithdraw = extraAmountWithdraw;
    }

    @Override
    public void withdraw(Double amount){
        if(canIWithdraw(amount)) {

            super.withdraw(amount);

        }
    }

    @Override
    public Boolean canIWithdraw(Double amount) {
        return getBalance() + extraAmountWithdraw > amount ;
    }
}
