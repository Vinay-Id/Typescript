type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2024
const carType: CarType = "Bugatti"
const carModel: CarModel = "Divo"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(car);
