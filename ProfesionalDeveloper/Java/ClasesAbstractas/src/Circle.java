public class Circle extends GeometricFigure {

    private Double diameter;

    public Circle (Double diameter) {
        super(0);
        this.diameter = diameter;
    }

    @Override
    public Double calculateArea(){
        return Math.pow(getRadius(),2) * Math.PI;
    }

    private Double getRadius(){
        return diameter/2;
    }

}
