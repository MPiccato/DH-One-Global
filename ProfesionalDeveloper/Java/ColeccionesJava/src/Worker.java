public class Worker implements Comparable<Worker> {

    private String name;
    private Integer hourWorked;

    public Worker(String name, Integer hourWorked){
        this.name = name;
        this.hourWorked = hourWorked;
    }

    public String toString(){
        return name;
    }

    @Override
    public int compareTo(Worker anotherWorker){
//        if (this.hourWorked > anotherWorker.hourWorked) {
//            return 1;
//        } else { return -1;}

        return this.name.compareTo(anotherWorker.name);

    }

}
