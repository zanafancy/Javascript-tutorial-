// objects descripe an entity
// object literal 

const person =
{
    firstName:"Chinaza",
    lastName: "Nancy",
    age: 190,
    gender: "female",
    isVerified: true,
    login: {
        userName: "",
        email: "zanafancy@gmail.com",
    },
    images: ["file.png", "file2.png"],
    videos: ["song.mp4"],
};

const car = {
    brand: "Kia",
    name: "Picanto",
    model: "",
    year: "2010",
    color: "black",
    isForSale: true,
    sold: false,
    images: ["file.png"],
    gear: "automatic",
    noOfDoors: 4,
    type: "",
};

const user = {
    firstName: "",
    lastName: "",
    age: 90,
    gender: "",
    email: "",
    password: "",
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.gender);
