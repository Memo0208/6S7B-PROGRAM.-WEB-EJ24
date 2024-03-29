// Este es un ejemplo básico de JavaScript que agrega funcionalidades a la página web

document.addEventListener("DOMContentLoaded", function() {
    // Interactividad mejorada: Cambiar el texto del encabezado al hacer clic en un botón
    var btnChangeHeader = document.getElementById("btnChangeHeader");
    var header = document.getElementById("mainHeader");
  
    btnChangeHeader.addEventListener("click", function() {
      header.textContent = "¡Gracias por hacer clic!";
    });
  
    // Validación de formularios: Validar que el campo de nombre no esté vacío antes de enviar el formulario
    var form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      var nameInput = document.getElementById("nameInput");
      if (nameInput.value === "") {
        alert("Por favor, ingrese su nombre.");
        event.preventDefault(); // Evitar el envío del formulario si la validación falla
      }
    });
  
    // Actualización dinámica de contenido: Agregar un nuevo elemento a la lista al hacer clic en un botón
    var btnAddItem = document.getElementById("btnAddItem");
    var list = document.getElementById("dynamicList");
  
    btnAddItem.addEventListener("click", function() {
      var newItem = document.createElement("li");
      newItem.textContent = "Nuevo elemento de lista";
      list.appendChild(newItem);
    });
  });
  