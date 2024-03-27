//Kids drink toddy.
//Teens drink coke.
//Young adults drink beer.
//adults drink whisky.
//Make a function that receive age, and return what they drink.

//Rules:

//Children under 14 old.
//Teens under 18 old.
//Young under 21 old.
//Adults have 21 or more.

function peopleWithAgeDrink(old) {
  return old <= 13
    ? "drink toddy"
    : old <= 17
    ? "drink coke"
    : old <= 18 || old <= 20
    ? "drink beer"
    : "drink whisky";
}
