const btnSave = document.getElementById("btnSave");
const Vendor = document.getElementById("Vendor");
const Model = document.getElementById("Model");
const Price = document.getElementById("Price");

btnSave.addEventListener("click", GetCar);

let CarsArr = [];

function GetCar() {
    event.preventDefault();
    // console.log(`Vendor: ${Vendor.value}\nModel: ${Model.value}\nPrice: ${Price.value}`)

    let Car = {
        Vendor: Vendor.value,
        Model: Model.value,
        Price: Price.value,
        Print() {
            console.log(`Vendor: ${this.Vendor}\nModel: ${this.Model}\nPrice: ${this.Price}`)
        }
    }

    Vendor.value = "";
    Model.value = "";
    Price.value = "";

    console.clear();

    CarsArr.push(Car)

    CarsArr.forEach(car => {
        car.Print();
    })

    console.log("Cars number: ", CarsArr.length);
}