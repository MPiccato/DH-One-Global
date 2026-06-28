import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchPage extends BasePage {
    private By searchBox = By.id("ciudad");
    private By searchButton = By.className("btn-primario");
    private By searchOk = By.className("categoria");

    public SearchPage(WebDriver driver, WebDriverWait wait) {
        super(driver, wait);
    }

    public void escribirBusqueda(String ciudad) {
        this.sendText(ciudad, searchBox);
        this.sendKey(Keys.ENTER, searchBox);
    }

    public void clickBuscar() {
        this.click(searchButton);
    }

    public String resultadoBusqueda() {
        System.out.println("RESULTADO DE LA BUSQUEDA: " + this.getText(searchOk));
        return this.getText(searchOk);
    }
}