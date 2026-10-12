
// variabler
const knapp = document.querySelector("button");
const inputFalt = document.querySelector("input");
const list = document.querySelector("#todoList");
const fel = document.querySelector("#fel");
const antalKlara = document.querySelector("#antalKlara");
const uppgifter = [];

// klick på knappen
knapp.addEventListener("click", function () {
  if (inputFalt.value === "") {
    fel.textContent = "Input must not be empty";
  } else {
    fel.textContent = "";

    const nyttElement = document.createElement("li");
    const rubrik = document.createElement("p");
    const korgen = document.createElement("span");
   
    rubrik.textContent = inputFalt.value;
    korgen.textContent = "🗑️";
    rubrik.appendChild(korgen);
    nyttElement.appendChild(rubrik);
    list.appendChild(nyttElement);

    nyttElement.addEventListener("click", function () {
      this.classList.add("klar");
      antalKlara.textContent = document.querySelectorAll(".klar").length + " completed";
    });

    korgen.addEventListener("click", function (event) {
      event.stopPropagation();
      nyttElement.remove();
    })

    const uppgiftObjekt = {
      text: inputFalt.value,
      klar: false
    };

    uppgifter.push(uppgiftObjekt);

    inputFalt.value = "";
  }
});
   

