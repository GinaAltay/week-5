class Car {
    constructor(name, module, color, cost) {
      this.name = name;
      this.module = module;
      this.color = color;
      this.cost = cost;
    }
  
    describe() {
      return `${this.name} has ${this.module}, ${this
        .color} and the price is : ${this.cost}`;
    }
  }
  
  class CarList {
    constructor(name) {
      this.name = name;
      this.cars = [];
    }
  
    addCar(name, module, color, cost) {
     // if (car instanceof Car) {
        this.cars.push(new Car(name,module, color, cost));
     // }
    }
  
    describe() {
      return `${this.name} has ${this.cars.length} cars.`;
    }
  }
  class Menu {
    constructor() {
      this.carLists = [];
      this.selectedCarList = null;
    }
  
    start() {
      let selection = this.showMainMenuOptions();
      while (selection != 0) {
        switch (selection) {
          case "1":
            this.createCarList();
            break;
          case "2":
            this.viewCarList();
            break;
          case "3":
            this.deleteCarList();
            break;
          case "4":
            this.displayCarList();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
      alert("Goodbye!");
    }
  
    showMainMenuOptions() {
      return prompt(`
      0) exit
      1) create a new CarList
      2) view a CarList
      3) delete a CarList
      4) display all CarLists
      `);
    }
  
    showCarListMenuOptions(description) {
      return prompt(`
      0) back
      1) add a new car
      2) delete a car
      -----------------
      ${description}
      `);
    }
  
    displayCarList() {
      let CarListString = "";
      for (let i = 0; i < this.carLists.length; i++) {
        CarListString += i + ") " + this.carLists[i].name + "\n";
      }
      alert(CarListString);
    }
  
    createCarList() {
      let namex = prompt("Enter name for new carList: ");
      this.carLists.push(new CarList(namex));
    }
  
    viewCarList() {
      let index = prompt("Enter the index of the carList that you want to view:");
      if (index > -1 && index < this.carLists.length) {
        this.selectedCarList = this.carLists[index];
        let description = "CarList Name: " + this.selectedCarList.name + "\n";
        description += " " + this.selectedCarList.describe() + "\n ";
        for (let i = 0; i < this.selectedCarList.cars.length; i++) {
          description +=
            i + ") " + this.selectedCarList.cars[i].describe() + "\n";
        }
        let selection1 = this.showCarListMenuOptions(description);
        switch (selection1) {
          case "1":
            this.createCar();
            break;
          case "2":
            this.deleteCar();
        }
      }
    }
  
    deleteCarList() {
      let index = prompt(
        "Enter the index of the CarList that you wish to delete: "
      );
      if (index > -1 && index < this.carLists.length) {
        this.carLists.splice(index, 1);
      }
    }
  
    createCar() {
      let name = prompt("Enter name for new car: ");
      let module = prompt("Enter module for new car: ");
      let color = prompt("Enter color for new car: ");
      let cost = prompt("Enter cost for new car: ");
      this.selectedCarList.cars.push(new Car(name, module, color, cost));
    }
  
    deleteCar() {
      let index = prompt("Enter the index of the car that you wish to delete: ");
      if (index > -1 && index < this.selectedCarList.cars.length) {
        this.selectedCarList.cars.splice(index, 1);
      }
    }
  }
  let menu = new Menu();
  menu.start();
  