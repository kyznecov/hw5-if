// 1.
let userWantBeer = confirm("Хочешь пива?");

if (userWantBeer) {
    alert("BEER!!!")
} else {
    alert("Очень жаль")
}

// 2.
let age = prompt("Возраст?");

if (age < 18) {
    alert("До 18 лет: ЗАПРЕЩЕННО!")
} else if (age < 30) {
    alert("Привет медвед!")
} else if (age >= 30) {
    alert("Доброго времени суток!")
}

// 3. 
let teaOrCoffe = confirm("Чай или кофе?");

if (teaOrCoffe === true) {
    teaOrCoffe = 'Чай'
} else if (teaOrCoffe === false) {
    teaOrCoffe = 'Кофе'
}

let sugar = confirm("Сахар?")

if (sugar === true) {
    alert(`${teaOrCoffe} с сахаром`)
} else if (sugar === false) {
    alert(`${teaOrCoffe} без махара`)
}

