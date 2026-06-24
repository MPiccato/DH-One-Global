import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class testGoogle {

    public WebDriver driver;

    @Test
    public void test_1() {

        driver = new ChromeDriver();

        driver.get("https://google.com");
        driver.getTitle();

        //Busco el elemento de la web que quiero testear

        WebElement searchBox = driver.findElement(By.name("q")); // Encuentro la caja de texto
        WebElement searchButton = driver.findElement(By.name("btnK"));

        searchBox.sendKeys("Selenium");
        searchBox.sendKeys(Keys.ENTER);
        //searchButton.click();

        searchBox.getAttribute("value"); // Espero que me devuelva el valor "Selenium"

        driver.quit(); // Cierro el test









    }


}
