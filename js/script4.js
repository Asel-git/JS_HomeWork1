//4
let souvenirWeight = 75;
let baubleWeight = 112;
let souvenir = Number(prompt("Введите количество сувениров"));
let trinket = Number(prompt("Введите количество безделушек"));
let totalWeight = souvenirWeight * souvenir + baubleWeight * trinket;
document.write(`Общий вес составляет : ${totalWeight} гр <br>`);
