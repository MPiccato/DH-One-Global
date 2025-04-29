public class VehicleMoto extends Vehicle {

    private String brandName;

    public VehicleMoto(String licensePlate, String color,String brandName) {
        super(licensePlate,color, 2);
        this.brandName = brandName;
    }
}
