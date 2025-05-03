import java.util.HashSet;
import java.util.Set;

public class University {

    private String name;
    private Set<Course> courseSet;
    private Set<Student> studentSet;

    public University(String name){
        this.name = name;
        courseSet = new HashSet<>();
        studentSet = new HashSet<>();
    }

    public void generateCourse(Integer id, String subject) {
        Course course = new Course(id, subject);
        courseSet.add(course);
    }

    public void generateStudent(Integer id, String name) {
        Student student = new Student(id, name);
        studentSet.add(student);
    }

    // Buscar un curso en el set de cursos

    public void agregateStudent(Integer courseId, Integer studentId) throws Exception{
        Course course = findCourse(courseId);
        Student student = findStudent(studentId);

        if(course == null){
            throw new CourseNotFoundException("Curso no encontrado");
        }
        if(student == null) {
            throw new StudentNotFoundException("Estudiante no encontrado");
        }
        course.addStudent(student);

    }

    private Course findCourse(Integer courseId) {
        Course searchCourse = null;
        for (Course course: courseSet){
            if(course.getId().equals(courseId)) {
                searchCourse = course;

            }
        }
        return searchCourse;
    }

    private Student findStudent(Integer studentID){
        Student searchStudent = null;
        for (Student student : studentSet) {
            if(student.getId().equals(studentID)){
                searchStudent = student;
            }


        }
        return searchStudent;
    }


}
