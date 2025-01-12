/*
 * Objects, Inerfaces, and API's
 */

let dog = {
    name: "John",
    color: "blue",
    breed: "Shiba",
    size: "Medium",
    bark: function(){
        console.log("bark");
    },
};

function x(y) {
    y.num += 5;
    console.log(y);
}

let y = {
    name: "John",
    num: 10,
};
x(y);
console.log(y);