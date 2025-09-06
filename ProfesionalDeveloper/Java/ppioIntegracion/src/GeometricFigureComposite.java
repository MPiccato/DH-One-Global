import java.util.ArrayList;
import java.util.List;

public class GeometricFigureComposite implements GeometricFigure{

    public List<GeometricFigure> figureList;

    public GeometricFigureComposite(){
        figureList = new ArrayList<>();
    }

    public void addGeometricFigure(GeometricFigure figura){
        figureList.add(figura);
    }

    @Override
    public Double calculateArea(){
        Double totalArea = 0.0;
        for(GeometricFigure figura: figureList){
            totalArea += figura.calculateArea();
        }
        return totalArea;
    }
}
