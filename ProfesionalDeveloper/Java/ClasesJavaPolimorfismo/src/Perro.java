public class Perro extends Animal{

    @Override
    public void hacerSonido(){
        System.out.println("Guau, Guauu");
    }

    public void buscarPelota(){
        System.out.println("Buscando pelota");
        hacerSonido();
    }
}
