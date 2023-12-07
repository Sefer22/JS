

function write(name,surname) {
    console.log(name + " " + surname);
}

write("Safar","Jafarli");
write("Tunzala","Jafarova");

function cube(number) {
    console.log(number*number*number);
}

cube(3);
cube(4);19
cube(5);



let age=Number(prompt("Enter your age"));

check(age);

function check(age) {
    if(age > 18) {
        console.log("You can buy Driver License");
    }else {
        console.log("You can't buy Driver License");
    }
}