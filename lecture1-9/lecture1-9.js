// Object
const WooJoonInfoObj = {
    name: "WooJoonHan",
    age: 21,
    gender:"Male",
    isHuman:true,
    favMovies: ["Avengers", "HarryPotter"],
    favFood: [{name: "Kimchi", fatty:false}, {name:"CheeseBurger", fatty:true}]
}

const WooJoonInfo = ["Woo Joon Han", "21", true, "YongIn"];

//console.log(WooJoonInfoObj); => X
WooJoonInfoObj.gender = "Female"
console.log(WooJoonInfoObj.gender); //=> male
console.log(WooJoonInfoObj.gender); //=> Female
console.log(WooJoonInfoObj);
/*
// Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
// you can use index ex) daysOfWeek[3] = "Thu"

/*
const daysOfWeek = 9

const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);
*/