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
    RenderCars();
    console.log("Cars number: ", CarsArr.length);
}

function RenderCars() {
    let root = document.getElementById("root");
    let span = document.createElement("span");
    span.setAttribute("class", "test");
    span.innerHTML = CarsArr[0].Vendor;
    root.appendChild(span);
}




// Expression
// const Minus = function (a, b) {
//     console.log(a - b)
// }
// // Minus(3, 1)

// // Declaration
// // Plus(5, 4);
// function Plus(a, b) {
//     console.log(a + b)
// }

// Arrow
// const Division = (a, b) => {
//     console.log(a / b)
// }
// Division(10, 2);
// const Test = (a, b) => console.log(a / b)
// Test(20, 5);

// Annonymous
// (function (a, b) {
//     console.log(a * b)
// }(5, 20))

// function Dog(Name, Breed, Age) {
//     this.Name = Name;
//     this.Breed = Breed;
//     this.Age = Age;
//     this.Print = function () {
//         console.log(`Name: ${this.Name}\nBreed: ${this.Breed}\nAge: ${this.Age}`)
//     }
// }

// let Bobik = new Dog("bobik", "Hasky", 2);
// Bobik.Print();

// let tyson = new Dog("Tyson", "Taxa", 5);
// tyson.Print();