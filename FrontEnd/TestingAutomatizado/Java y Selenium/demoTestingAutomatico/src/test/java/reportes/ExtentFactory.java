package reportes;


import com.aventstack.extentreports.ExtentReports;

public class ExtentFactory {

    public static ExtentReports getInstance() {
        ExtentReports extent = new ExtentReports();

        extent.setSystemInfo("OS", "MacOs");
        extent.setSystemInfo("Environment", "QA");
        extent.setSystemInfo("Tester Name", "Martin Piccato");
        extent.setSystemInfo("Browser", "Chrome");

        return extent;

    }



}
