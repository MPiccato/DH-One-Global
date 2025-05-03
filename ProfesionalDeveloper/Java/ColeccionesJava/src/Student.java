public class Student {

    private Integer id;
    private String name;
    private Double averageNotes;

    public Student(Integer id, String name, Double averageNotes) {
        this.id = id;
        this.name = name;
        this.averageNotes = averageNotes;
    }

    @Override
    public String toString(){
        return "Estudiante: " + name + " con id: " + id + ", promedio de notas: " + averageNotes;
    }
}
