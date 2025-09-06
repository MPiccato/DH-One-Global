package ejercicio;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class GroupTest {

    @Test
    public void caseOne() {
        Person juan = new Person("Juan", 23);
        Person pedro = new Person("Pedro", 32);
        Person ana = new Person("Ana", 40);
        Person luz = new Person("Luz", 21);
        Person julian = new Person("Julian", 35);

        Group group = new Group();

        group.addPerson(juan);
        group.addPerson(pedro);
        group.addPerson(ana);
        group.addPerson(luz);
        group.addPerson(julian);

        // chequeo que el tamaño de la colección sea 2

        Assertions.assertTrue(group.getPeople().size() == 2);

    }

    @Test
    public void caseTwo() {
        Person juan = new Person("Juana", 18);
        Person pedro = new Person("Pedro", 17);
        Person ana = new Person("Analia", 22);
        Person luz = new Person("Lucia", 14);
        Person julian = new Person("Julian", 32);

        Group group = new Group();

        group.addPerson(juan);
        group.addPerson(pedro);
        group.addPerson(ana);
        group.addPerson(luz);
        group.addPerson(julian);

        // chequeo la edad de los miembros del grupo

        Assertions.assertTrue(group.getPeople().size() == 3);
    }

    @Test
    public void caseThree() {

        Person nicolas = new Person("N1colas", 18);
        Person tomas = new Person("Tomas", 19);
        Person esteban = new Person("3Steban", 19);
        Person carlos = new Person("Carlos\\sV", 22);
        Person francisco = new Person("Francisco\\sc", 19);

        Group group = new Group();

        group.addPerson(nicolas);
        group.addPerson(tomas);
        group.addPerson(esteban);
        group.addPerson(carlos);
        group.addPerson(francisco);

        Assertions.assertEquals(1, group.getPeople().size());



    }



}
