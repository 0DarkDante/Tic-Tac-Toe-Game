function start(cells) {
  cells.forEach(function(cell) {
    let isCrossPlaced = false; 

    cell.addEventListener('click', function() {
      if (!isCrossPlaced) {
        let cross = document.createElement('div');
        cross.className = 'cross'; 
        cross.textContent = '✖';
        cell.appendChild(cross);

        isCrossPlaced = true; 
      }
    });
  });
}

let cells = document.querySelectorAll('#field td');

start(cells);

