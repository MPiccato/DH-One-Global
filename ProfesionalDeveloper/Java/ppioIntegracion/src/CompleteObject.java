import java.util.ArrayList;
import java.util.List;

public class CompleteObject {

    private List<GeometricFigure> geometricFiguresList;

    public CompleteObject(){
        geometricFiguresList = new ArrayList<>();
    }

    public void addGeometricFigure(String codigo) {
        geometricFiguresList.add(GeometricFigureFactory.getInstance().generateGeometricFigure(codigo));
    }

    public Double calculateTotalArea(){
        Double totalArea = 0.0;
        for(GeometricFigure figura: geometricFiguresList){
            totalArea += figura.calculateArea();
        }
        return totalArea;

    }




}
