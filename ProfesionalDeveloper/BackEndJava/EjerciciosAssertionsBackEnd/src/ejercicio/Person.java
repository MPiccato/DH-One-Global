package ejercicio;

public class Person {
    private String name;
    private Integer age;

    public Person(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    // vamos a chequear que la persona sea mayor de 18 años

    public boolean isOlder() {
        return age >= 18; // chequeamos que sea true
    }

    // El nombre debe tener una longitud de 5 letras como mínimo
    public boolean name5Check() {
        return name.length() > 4; // chequeamos que tenga al menos 5 letras.

    }

    // la edad tiene que ser entre 0 y 120 años
    public boolean ageCheck() {

        boolean check = false;

        if (age > 0 && age <= 120) {
            return !check;
        }
        return check;
    }

    // el nombre de la persona solo debe contener letras

    public boolean nameAZCheck() {
        boolean check = false;

        //convierto la cadena de caracteres en un array de letras
        char [] nameToChars = name.toCharArray();
        for (char letter: nameToChars) {
            if (!Character.isLetter(letter)) {
                return check;
            }

        }
        return !check;
    }


}
