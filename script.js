// script.js

// Agrega cualquier funcionalidad de JavaScript que desees aquí
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenido a Marisol Spa.");
    
    // Puedes agregar efectos, validaciones de formularios o interacciones aquí.
});

// JavaScript para la funcionalidad de la página Marisol Spa

// Al hacer clic en el botón "Ver Servicios", desplazarse suavemente a la sección de servicios
document.querySelector('button').addEventListener('click', () => {
    // Obtiene el elemento con el id 'servicios' y desplázalo a la vista
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
});
