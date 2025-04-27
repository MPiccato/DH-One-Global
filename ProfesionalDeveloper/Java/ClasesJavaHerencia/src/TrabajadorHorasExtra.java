public class TrabajadorHorasExtra extends Trabajador {

    private Integer horasExtra;
    private Double precioHora;

    public TrabajadorHorasExtra (String name, Double salary, Integer horasExtra, Double precioHora) {
        super(name, salary);
        this.horasExtra = horasExtra;
        this.precioHora = precioHora;

    }

    @Override
    public Double salario(){
        return super.salario() + (horasExtra * precioHora);
    }



}
