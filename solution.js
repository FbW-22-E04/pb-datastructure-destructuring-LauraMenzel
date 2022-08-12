//1.

let fruit, vegetables, food;

[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log("1.");
console.log(fruit);
console.log(vegetable);
console.log(food);
console.log(
  "-----------------------------------------------------------------"
);

//2.

let fran, stan, ian;

({ fran, stan, ian } = {
  fran: "witch",
  stan: "ghost",
  ian: "mummy",
});

console.log("2.");
console.log(fran, stan, ian);
console.log(
  "-----------------------------------------------------------------"
);





//3.
console.log("3.");
const band = {
  name: "Led Zeppelin",
  greatestHit: "Stairway to heaven",
  nationality: "Great Britain",
  genre: "Rock",
};

function data({
  name,
  greatestHit,
  nationality,
  genre,
})  {
    console.log(`${name} is a ${nationality} ${genre}-Band. Their greatest Hit is "${greatestHit}".`); 
}
data(band);





