import java.util.Objects;

public class User {

    private Integer id;
    private String name;

    public User(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    //Sobreescribo toString()
    @Override
    public String toString(){
        return "Nombre: "+name;
    }

    // HashCode
    @Override
    public int hashCode(){
        return Objects.hash(id);
    }
}
