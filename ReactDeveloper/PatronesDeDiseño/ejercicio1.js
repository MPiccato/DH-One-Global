class Vehicle {
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.isRunning = false;
    }

    hank() {
        console.log("beep, beep");
    }
}

class Car extends Vehicle {
    constructor(brand, year, color, wheelsCount) {
        super(brand, year, color);
        this.wheelsCount = wheelsCount
    }

    startEnginds() {
        this.isRunning = true;
    }
    stopEngins() {
        this.isRunning = false;
    }
}

class Bike extends Vehicle {
    constructor(brand, year, color) {

        this.brand = brand;
        this.year = year;
        this.color = color;
    }

}

// Instanciamos el objeto, lo creamos
const myBike = new Bike("Honda", "2024", "black");
myBike.hank();

const myCar = new Car("Megane", 2013, "blue");
myCar.startEnginds();
myCar.hank();
myCar.stopEnginds();
