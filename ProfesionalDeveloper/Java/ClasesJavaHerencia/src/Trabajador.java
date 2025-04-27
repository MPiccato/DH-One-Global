public class Trabajador {

    private String name;
    private Double salary;

    public Trabajador(String name, Double salary){
        this.name = name;
        this.salary = salary;
    }
    public Double salario(){
        return this.salary;
    }

    public String getName() {
        return name;
    }
}
