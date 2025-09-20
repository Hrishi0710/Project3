const box1 = document.getElementById('box-1')
box1.addEventListener('click', () => {
    if (box1.style.backgroundColor === "red") {
        box1.style.backgroundColor = "transparent";
    } else {
        box1.style.backgroundColor = "red";
    }
})
const box2 = document.getElementById('box-2')
box2.addEventListener('click', () => {
    if (box2.style.backgroundColor === "blue") {
        box2.style.backgroundColor = "transparent";
    } else {
        box2.style.backgroundColor = "blue";
    }
})
const box3 = document.getElementById('box-3')
box3.addEventListener('click', () => {
    if (box3.style.backgroundColor === "green") {
        box3.style.backgroundColor = "transparent";
    } else {
        box3.style.backgroundColor = "green";
    }
   
})
const box4 = document.getElementById('box-4')
box4.addEventListener('click', () => {
    if (box4.style.backgroundColor === "yellow") {
        box4.style.backgroundColor = "transparent";
    } else {
        box4.style.backgroundColor = "yellow";
    }
    
})

const greetBtn = document.getElementById("btn");
const nameInput = document.getElementById("input");
const greeting = document.getElementById("greet");

    greetBtn.addEventListener("click", () => {
      const name = nameInput.value.trim(); 
      if (name) {
        greeting.textContent = `Hello, ${name}`;
      } else {
        greeting.textContent = "Hello";
      }
    });
