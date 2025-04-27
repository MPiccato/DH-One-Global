public class DogPaseador {

    private String name;

    public DogPaseador(String name) {
        this.name = name;
    }

    public void pasearDog(Dog dog) {
        System.out.println("Estoy paseando al perro " + dog.getName());
    }
}
