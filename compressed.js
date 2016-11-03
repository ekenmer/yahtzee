var diceToss = [0,0]; // Counter
let random = () => Math.floor(Math.random() * 1296 + 1); // 1 in 1296 random generator
do { diceToss[0] = random(); // YHTZ Game Engine 1
	diceToss[1]++; // YHTZ Game Engine 2
} while (diceToss[0] != 666); // YHTZ Game Engine 3, control number
console.log = "Yahtzee took " + diceToss[1] + " throws!"; // Displays stats at true