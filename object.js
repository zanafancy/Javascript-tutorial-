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
    videos: [...],
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

// dropbox: storage space
// github: storage space 
// git -v (to know if you have git installed)
// ensure you are at the current directory, before you initialize your entire computer.
// pwd: print working directory, to confirm where you are, if you are in the right folder
// git init: to creat a folder that git will be using to track everything with branches
// git add: to add all the files instead of typing manually. use the . it represents every untracked file (git add .)
// commit: to add it to git so that git will know the file: git commit -m "first commit"
// git config --global user.email "zanafancy@gmail.com"
// git config --global user.name "zanafancy"
// rm -rf . git: