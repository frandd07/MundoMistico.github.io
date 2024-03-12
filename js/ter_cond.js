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

  //mi cuenta
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
    var miCuentaDropdown = document.querySelector('.dropdown:nth-child(3) .dropdown-content');

    var informacionOption = document.createElement('a');
    informacionOption.href = 'informacion.html';
    informacionOption.textContent = 'Información';

    var cerrarSesionOption = document.createElement('a');
    cerrarSesionOption.href = '../index.html'; 
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
        window.location.href = '../html/pag_inicial.html'; // Reemplaza 'tu_pagina_de_inicio.html' con la URL deseada
    });

    cestaButton.addEventListener('click', function() {
        window.location.href = 'tu_pagina_de_cesta.html'; // Reemplaza 'tu_pagina_de_cesta.html' con la URL deseada
    });
});



