const sudokuGridElement = document.querySelector("#sudokuGrid");

class Sudoku {
	constructor(n) {
		this.boxes = new Array(n);
	}
}
class Box {
	constructor() {
		this.numbers = [];
		this.numberPositions = [];
		this.possible = [];
		this.possiblePositions = [];
	}
}

const sudoku = new Sudoku(9);


function solveSudokuGrid(n=3) {
	const nSq = n*n;
	const grid = [];
	const inputs = [...document.querySelectorAll(".inputs")];
	const boxes = new Box();

	for (let rows = 0; rows < n; rows++) {
		for (let cols = 0; cols < n; cols++) {
			let z = inputs[rows*nSq+cols];
			//debugger;

			boxes.numbers.push(z.value);
			//console.log(grid[rows][cols].numbers);
		}
	}

	console.log(boxes)
}


function createSudokuGrid(n=3) {
	const nSq = n*n;

	for (let rows = 0; rows < nSq; rows++) {
		for (let cols = 0; cols < nSq; cols++) {
			let inputs = document.createElement("input");
			inputs.setAttribute("type", "number");
			inputs.setAttribute("class", "inputs");

			sudokuGridElement.appendChild(inputs);
			//console.log(grid[rows][cols].numbers);
		}
	}
	//console.log(JSON.stringify(grid, null, 3));
}

createSudokuGrid()

addEventListener("keypress", (e)=> {
	if (e.key === "a") {
		solveSudokuGrid();
	}
})