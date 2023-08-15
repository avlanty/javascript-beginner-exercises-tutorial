// Your code here:
for (let bottles = 99; bottles >= 1; bottles--) {
    let lyrics = `${bottles} bottles of milk on the wall, ${bottles} bottles of milk. 
Take one down and pass it around, ${bottles - 1} bottles of milk on the wall.`;

    if (bottles === 1) {
        lyrics = `1 bottle of milk on the wall, 1 bottle of milk. 
Take it down and pass it around, no more bottles of milk on the wall.`;
    } else if (bottles === 2) {
        lyrics = `2 bottles of milk on the wall, 2 bottles of milk. 
Take one down and pass it around, 1 bottle of milk on the wall.`;
    }

    console.log(lyrics);
}

console.log(`Go to the store and buy some more`);