document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario de contacto
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        form.reset(); // Limpia el formulario
    });

    // Manejo de la visibilidad de las secciones
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? 'block' : 'none';
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Mostrar la primera sección por defecto
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});