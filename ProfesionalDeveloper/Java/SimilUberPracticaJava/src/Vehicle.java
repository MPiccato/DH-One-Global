public abstract class Vehicle  {


    private String licensePlate;
    private String color;

    // Atributo de clase lleva static
    private static Double PRICE_PER_KILOMETER =100.0;

    public Vehicle(String licensePlate, String color) {
        this.licensePlate = licensePlate;
        this.color = color;

    }

    public Double calculateFare(Double distance) {
        return distance * PRICE_PER_KILOMETER;
    }

}
