/*
Homework: Create a `Car` Class with Inheritance, Encapsulation, and Polymorphism in JavaScript

🚀 **Objective**:
Create a `Car` superclass and two subclasses: `ElectricCar` and `GasCar` with inheritance, encapsulation, and polymorphism.

---

### **Super Class: `Car`**

✅ **Properties**:
- `make` (String): Must be a non-empty string. Capitalize first letter.
- `model` (String): Must be a non-empty string. Capitalize first letter.
- `year` (Number): Must be >= 1886. Defaults to 2025 if not provided.

✅ **Methods**:
- **Setters** and **Getters** for `make`, `model`, and `year`.
- **Private Method** `#checkServiceStatus()`: Logs `"Service status: OK"`.
- **Static Method** `vehicleType()`: Returns `"Car"`.
- **`displayDetails()`**: Returns `"This is a car model [model] of the year [year]."`

---

### **Child Class: `ElectricCar`**

✅ **Properties**:
- `batteryCapacity` (Number): Indicates the battery capacity in kWh (default: `50`).
- `electricRange` (Number): Indicates the maximum driving range on a single charge in kilometers (default: `350`).
- `chargingTime` (Number): Time in hours to fully charge the car (default: `8`).

✅ **Methods**:
- **Constructor**: Call `super(make, model, year)` and initialize `batteryCapacity`, `electricRange`, and `chargingTime`.
- **Setter and Getter** for `batteryCapacity`, `electricRange`, and `chargingTime`.
- **`chargeBattery()`**: Logs `"Charging the battery..."`.
- **`displayDetails()`**: Override to return `"This is an Electric Car model [model] of the year [year], with a [batteryCapacity] kWh battery, [electricRange] km range, and charging time of [chargingTime] hours."`
- **Static Method** `isEcoFriendly()`: Returns `true`.

---

### **Child Class: `GasCar`**

✅ **Properties**:
- `fuelCapacity` (Number): Indicates the fuel tank capacity in liters (default: `50`).
- `fuelEfficiency` (Number): Indicates the fuel efficiency in kilometers per liter (default: `15`).
- `emissions` (Number): CO2 emissions in grams per kilometer (default: `120`).

✅ **Methods**:
- **Constructor**: Call `super(make, model, year)` and initialize `fuelCapacity`, `fuelEfficiency`, and `emissions`.
- **Setter and Getter** for `fuelCapacity`, `fuelEfficiency`, and `emissions`.
- **`refuel()`**: Logs `"Refueling the car..."`.
- **`displayDetails()`**: Override to return `"This is a Gas Car model [model] of the year [year], with a [fuelCapacity]L fuel tank, [fuelEfficiency] km/L efficiency, and [emissions] g/km CO2 emissions."`
- **Static Method** `isEcoFriendly()`: Returns `false`.

---

### **Requirements**:
- Use **inheritance** (`super()`).
- Implement **encapsulation** (private properties, setters, getters).
- Apply **polymorphism** (override `displayDetails()`).
- Implement **static methods**.

---
*/

// Example

const myElectricCar = new ElectricCar("tesla", "model s", 2023);
console.log(myElectricCar.displayDetails()); // This is an Electric Car model Model S of the year 2023, with a 50 kWh battery, 350 km range, and charging time of 8 hours.

const myGasCar = new GasCar("toyota", "corolla", 2022);
console.log(myGasCar.displayDetails()); // This is a Gas Car model Corolla of the year 2022, with a 50L fuel tank, 15 km/L efficiency, and 120 g/km CO2 emissions.
