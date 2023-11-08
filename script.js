function start(cells) {
	let i = 0;
	
	for (let cell of cells) {
		cell.addEventListener('click', function() {
			i++; 

      if (i % 2 == 0) {
        this.textContent = 'O';
        this.className = 'cross2';
      } else {
        this.textContent = 'X';
        this.className = 'cross';
      };

		});
	}
}

let cells = document.querySelectorAll('#field td');

start(cells);

