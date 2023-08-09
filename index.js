const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//Seleccionar nodos
const input = document.querySelector(".input");
const buscarbtn = document.querySelector(".buscar");
const containerCard = document.getElementById("containerCard");
const section = document.getElementsByClassName("section");
const eliminar = document.getElementsByClassName("limpiar");

//Buscar pizza en array
const encontrarPizza = (ev) => {
  ev.preventDefault();
  const encontrarP = pizzas.find((pizza) => pizza.id == input.value);

  if (encontrarP) {
    TemplatePizza(encontrarP);
    recordarPizza(encontrarP);
  } else {
    mostrarError("Id de pizza no encontrado");
  }
};

//Template de card con estilos mediante Tailwind
const TemplatePizza = (pizza) => {
  containerCard.innerHTML = `
  <div class='pizza flex items-center justify-center flex-col card card-compact gap-4 bg-orange-800 p-8  rounded-md'>
  <img class='w-3/4  rounded' src="${pizza.imagen}">
  <h2>${pizza.nombre}</h2>
  <h4 class="italic text-base text-indigo-200 font-medium underline">Ingredientes</h4>
  <p>${pizza.ingredientes.join(" - ")}</p>
  <h4 class="font-bold text-2xl">Precio</h4>
  <h3 class="font-black text-yellow-100 text-2xl">$${pizza.precio}</h3>
  </div>
  `;
};

//LocalStorage
const recordarPizza = (Pizza) => {
  localStorage.setItem(
    "ultimaPizza---> [id, nombre]",
    JSON.stringify([Pizza.id, Pizza.nombre])
  );
};

//Error
const mostrarError = (error) => {
  containerCard.innerHTML = `<h5 class= "error">${error}</h5>`;
};

// Boton Buscar
const buscar = () => {
  buscarbtn.addEventListener("click", encontrarPizza);
};

buscar();

// Boton Limpiar
const borrarCard = (ev) => {
  ev.preventDefault();
  section.removeChild(containerCard);
};

const limpiarBusqueda = (ev) => {
  ev.preventDefault();
  eliminar.addEventListener("click", borrarCard);
};

