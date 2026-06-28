import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import reportes.ExtentFactory;
import java.time.Duration;

public class SearchTest {
    public WebDriver driver;
    public WebDriverWait wait;

    static ExtentSparkReporter infoExtent;
    static ExtentReports extent;

    @BeforeAll
    public static void createReports() {
        infoExtent = new ExtentSparkReporter("target/Reporte.html");
        extent = ExtentFactory.getInstance();
        extent.attachReporter(infoExtent);

    }

    @BeforeEach
    public void preconditions() throws InterruptedException {

        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofMillis(5000));
        SearchPage searchPage = new SearchPage(driver, wait);
        searchPage.setup();
        searchPage.url("https://digital-booking-front.digitalhouse.com/");
        Thread.sleep(1000);

    }



    @Tag("BUSQUEDA")
    @Tag("SMOKE")
    @Test
    public void BusquedaExitosa() throws InterruptedException {
        ExtentTest test = extent.createTest("BUSQUEDA");
        test.log(Status.INFO, "COMIENZA BUSQUEDA");

        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://digital-booking-front.digitalhouse.com/");
        Thread.sleep(1000);
        test.log(Status.INFO, "ENCUENTRA URL");

        WebElement searchBox = driver.findElement(By.id("ciudad"));
        searchBox.sendKeys("Punta del este");
        searchBox.sendKeys(Keys.ENTER);
        Thread.sleep(1000);

        WebElement searchButton = driver.findElement(By.className("btn-primario"));
        searchButton.click();
        Thread.sleep(1000);

        test.log(Status.PASS,"EXITOSAMENTE");

        WebElement searchOk = driver.findElement(By.xpath("//*[@id=\"68\"]/div[2]/div/div[1]"));
        String busquedaCorrecta = searchOk.getText();
        System.out.println(busquedaCorrecta);

    }

    @Test
    @Tag("BUSQUEDA")
    @Tag("SMOKE")
    public void BusquedaExitosa_Grecia() throws InterruptedException {
        ExtentTest test = extent.createTest("BUSQUEDA GRECIA");
        SearchPage searchPage = new SearchPage(driver, wait);


        searchPage.escribirBusqueda("Paros");
        Thread.sleep(1000);

        searchPage.clickBuscar();
        Thread.sleep(2000);
        test.log(Status.PASS,"EXITOSAMENTE");

        searchPage.resultadoBusqueda();

    }
    @AfterEach
    public void postconditions() throws InterruptedException {

        SearchPage searchPage = new SearchPage(driver, wait);
        Thread.sleep(2000);
        searchPage.close();



    }

    @AfterAll
    public static void saveReports() {
        extent.flush();
    }
}