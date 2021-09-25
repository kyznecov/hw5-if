// 1.
let userWantBeer = confirm("Хочешь пива?");
let massegeBeer;

if (userWantBeer) {
    massegeBeer = 'сообщение 1';
} else {
    massegeBeer = 'сообщение 2';
}

// 2.
let age = prompt("Возраст?");

if (age > 30) {
    age = "Здравствуйте!";
} else if (age > 18) {
    age = "Привет медвед!";
} else {
    age = "сообщение о запрете!";
}

// 3. 
let isTea = confirm("Чай или кофе?");
let withSugar = confirm("С сахором?");

if (isTea && withSugar) {
    isTea = "Чай с сахаром";
} else if (isTea) {
    isTea = "Чай без сахара";
} else if (withSugar) {
    isTea = "Кофе с сахаром";
} else {
    isTea = "Кофе без сахара";
}


