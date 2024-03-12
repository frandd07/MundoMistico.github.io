const postActionsControllers = document.querySelectorAll(
    ".post-actions-controller"
  );
  
  // When post action controllers are clicked, the action content is opened and closed
  
  postActionsControllers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const postActionsContent = document.getElementById(targetId);
  
      if (postActionsContent) {
        const isVisible = postActionsContent.getAttribute("data-visible");
  
        if (isVisible === "false") {
          postActionsContent.setAttribute("data-visible", "true");
          postActionsContent.setAttribute("aria-hidden", "false");
          btn.setAttribute("aria-expanded", "true");
        } else {
          postActionsContent.setAttribute("data-visible", "false");
          postActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
  
  // If the action content is opened, it is closed by clicking outside of it
  
  function handleClickOutside(event) {
    postActionsControllers.forEach((btn) => {
      const targetId = btn.getAttribute("data-target");
      const postActionsContent = document.getElementById(targetId);
  
      if (postActionsContent && postActionsContent.getAttribute("data-visible") === "true") {
        if (!postActionsContent.contains(event.target) && event.target !== btn) {
          postActionsContent.setAttribute("data-visible", "false");
          postActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  }
  
  document.addEventListener("click", handleClickOutside);
  
  postActionsControllers.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  
  const likeBtns = document.querySelectorAll(".post-like");
  
  // When the like buttons are clicked, they are colored red or this action is undone
  
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      if (likeBtn.classList.contains("active")) {
        likeBtn.classList.remove("active");
      } else {
        likeBtn.classList.add("active");
      }
    });
  });
  
  // Swiper
  
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 400,
    mousewheel: {
      invert: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: "auto", // Cambia el número fijo a "auto"
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones "Comprar" por su clase
    var buyButtons = document.querySelectorAll('.post-buy-button');

    // Agrega un evento de clic a cada botón
    buyButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Define las URLs de compra correspondientes
            var urls = [
                '../html/compra.html',
                '../html/compra.html',
                '../html/compra.html',
                '../html/compra.html'
            ];

            // Redirige a la URL de compra correspondiente según el índice del botón
            window.location.href = urls[index];
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.dropdown');

  // Elimina los elementos dentro del menú desplegable
  dropdown.querySelector('.dropdown-content').innerHTML = '';

  // Agrega los nuevos elementos
  var menuItems = ['Velas de Hechizo', 'Pociones Especiales', 'Joyas encantadas', 'Muñecos de la suerte', 'Varitas Mágicas'];

  menuItems.forEach(function (itemText) {
      var menuItem = document.createElement('a');
      menuItem.href = '#';
      menuItem.textContent = itemText;

      dropdown.querySelector('.dropdown-content').appendChild(menuItem);
  });

  // Añade el evento de clic al menú desplegable
  dropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      dropdown.classList.toggle('active');
      var dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.classList.toggle('show');
  });

  // Cierra el menú desplegable si el usuario hace clic fuera de él
  window.addEventListener('click', function (event) {
      if (dropdown.classList.contains('active') && !dropdown.contains(event.target)) {
          dropdown.querySelector('.dropdown-content').classList.remove('show');
          dropdown.classList.remove('active');
      }
  });
});


//redirigir los productos del nav
document.addEventListener('DOMContentLoaded', function () {
  var productDropdown = document.querySelector('.dropdown');

  // Elimina los elementos dentro del menú desplegable de productos
  productDropdown.querySelector('.dropdown-content').innerHTML = '';

  // Agrega los nuevos elementos al menú de productos con URLs
  var productMenuItems = [
    { text: 'Velas de Hechizo', url: '../html/velas.html' },
    { text: 'Pociones Especiales', url: '../html/pociones.html' },
    { text: 'Joyas encantadas', url: '../html/joyas.html' },
    { text: 'Muñecos de la suerte', url: '../html/munecos.html' },
    { text: 'Varitas Mágicas', url: '../html/varitas.html' }
  ];

  productMenuItems.forEach(function (item) {
    var productMenuItem = document.createElement('a');
    productMenuItem.href = item.url;
    productMenuItem.textContent = item.text;

    productDropdown.querySelector('.dropdown-content').appendChild(productMenuItem);
  });

  // Añade el evento de clic al menú desplegable de productos
  productDropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    productDropdown.classList.toggle('active');
    var productDropdownContent = productDropdown.querySelector('.dropdown-content');
    productDropdownContent.classList.toggle('show');
  });

  // Cierra el menú desplegable de productos si el usuario hace clic fuera de él
  window.addEventListener('click', function (event) {
    if (productDropdown.classList.contains('active') && !productDropdown.contains(event.target)) {
      productDropdown.querySelector('.dropdown-content').classList.remove('show');
      productDropdown.classList.remove('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
      var dropdownLink = dropdown.querySelector('a');
      var dropdownContent = dropdown.querySelector('.dropdown-content');

      dropdownLink.addEventListener('click', function (event) {
          event.preventDefault();
          dropdownContent.classList.toggle('show');
      });

      window.addEventListener('click', function (event) {
          if (!event.target.matches('.dropdown a')) {
              dropdownContent.classList.remove('show');
          }
      });
  });

  // Agregamos opciones al menú "Mi Cuenta"
  var miCuentaDropdown = document.querySelector('.dropdown:nth-child(3) .dropdown-content'); // Ajusta el índice según tu estructura HTML

  var informacionOption = document.createElement('a');
  informacionOption.href = 'informacion.html'; // Cambia 'informacion.html' por tu URL real
  informacionOption.textContent = 'Información';

  var cerrarSesionOption = document.createElement('a');
  cerrarSesionOption.href = '../index.html'; // Cambia 'cerrar_sesion.html' por tu URL real
  cerrarSesionOption.textContent = 'Cerrar Sesión';

  miCuentaDropdown.appendChild(informacionOption);
  miCuentaDropdown.appendChild(cerrarSesionOption);
});

//inicio y cesta
document.addEventListener('DOMContentLoaded', function() {
  // Obtener referencias a los elementos de los botones
  var inicioButton = document.querySelector('nav ul li:first-child a');
  var cestaButton = document.querySelector('nav ul li:nth-child(2) a');

  // Agregar eventos de clic para redireccionar
  inicioButton.addEventListener('click', function() {
      window.location.href = '../html/pag_inicial.html'; 
  });

  cestaButton.addEventListener('click', function() {
      window.location.href = 'tu_pagina_de_cesta.html'; 
  });
});

