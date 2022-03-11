function Dog(color, name, age, family) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function() {
        return this.color + " " + this.family;
    }
}

let myDog = new Dog("검정색", "곰", 3, "불독");
let a = myDog.hasOwnProperty('color') + "<br>";
let b = myDog.hasOwnProperty('breed') + "<br>";
let c = myDog.hasOwnProperty('class');

console.log(a);
console.log(b);
console.log(c);