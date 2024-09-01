// * 1
const names = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(names);
let string = "";
for (let i = 0; i < names.length; i += 1) {
  string += names[i] + ", ";
}
console.log(string);
string = names.join(", ");
console.log(string);
// * 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const cardToRemove = "Карточка-3";
const cardToInsert = "Карточка-6";
const cardToUpdate = "Карточка-4";
console.log(cards);
// * Видалення
cards.splice(cards.indexOf(cardToRemove), 1);
console.log(cards);
// * Додавання
cards.push(cardToInsert);
console.log(cards);
// * Оновлення
cards.splice(cards.indexOf(cardToUpdate), 1, "Карточка-7");
console.log(cards);
