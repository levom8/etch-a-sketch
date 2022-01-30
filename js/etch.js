let number = 0;
const container = document.querySelector('.grid');    

function numberSquare (number) {
    let child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    for (let i = 0; i < number; i++) {
        const i = document.createElement('div')
        container.appendChild(i);
        i.classList.add('square');

            for (let j = 0; j < number; j++) {
                const j = document.createElement('div');
                i.appendChild(j);
                j.classList.add('squareInside');
          }

        // squareHov is a node list. it looks and acts much like an array
        const squareHov = document.querySelectorAll('.squareInside');
        //we use the .forEach method to iterate through each square
        squareHov.forEach((square) => {
        //and for each one we add a 'mouseenter' listener
            square.addEventListener("mouseover", (e) => { 
                e.target.style.background = 'gold';
                // console.log(e)
            });
        }); // works with e or also just replace "e.target" by "square"
}
}

const btnEfface = document.querySelector('.eraseButton');
btnEfface.addEventListener("click", erase);
function erase(e) {
  let child = container.lastElementChild; 
  while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
  }
}

const btn = document.querySelector('.resetButton');
btn.addEventListener("click", askNumber);
function askNumber(e) {

    number = prompt('Please enter a positive number below 100','Type here');
    if (number <= 100 & number >= 0) {
        return numberSquare(number);
    }   
    else {
        alert("Please type a positive number under 100!")
    }
}



