package ejercicio;

import java.util.ArrayList;
import java.util.List;

public class Group {

    private List<Person> people;

    public Group() {
        people = new ArrayList<>();
    }

    public void addPerson(Person person) {
        boolean isOlder = person.isOlder();
        boolean name5Check = person.name5Check();
        boolean nameAZCheck = person.nameAZCheck();
        boolean ageCheck = person.ageCheck();

        if (isOlder && name5Check && nameAZCheck && ageCheck) {
            people.add(person);
            System.out.println("Person is added OK: " + person.getName());
        } else {
            System.err.println("Person is not added: " + person.getName());
            if (!isOlder) System.out.println("Person is younger");
            if (!name5Check) System.out.println("Person names character should be 5 letters or more");
            if (!nameAZCheck) System.out.println("Person name is wrong, only letters are ok");
            if (!ageCheck) System.err.println("Age of person should be between 0 and 120 years old");
        }
    }

    public List<Person> getPeople() {
        return people;
    }

    public void setPeople(List<Person> people) {
        this.people = people;
    }
}
