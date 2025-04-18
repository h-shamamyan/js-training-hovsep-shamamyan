function Car(make, model, year, engine) {
  this.make = make;
  this.model = model;
  this.year = year;

  // Using Object.defineProperty to create getters and setters
  Object.defineProperty(this, "engine", {
    get: function () {
      return this._engine;
    },
    set: function (engine) {
      if (!engine) {
        throw new Error("The engine is mandatory");
      }
      this._engine = engine;
    },
  });

  this.engine = engine; // This will trigger the setter
}

let myCar = new Car("Mazda", "6", 2016, 2.5);
console.log(myCar.engine); // This will call the getter and log 2.5
myCar.engine = 3.0; // This will call the setter and update the engine
console.log(myCar.engine); // This will call the getter and log 3.0
