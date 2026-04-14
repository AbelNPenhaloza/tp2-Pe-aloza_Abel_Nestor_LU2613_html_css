/**
 * Agencias.js - Funcionalidades para la página de agencias
 * Filtrado, interacciones y efectos
 */

(function() {
    'use strict';

    // ========== FILTRADO DE AGENCIAS ==========
    const filterRadios = document.querySelectorAll('input[name="filtro-agencia"]');
    const agencias = document.querySelectorAll('.agencia-card');
    
    /**
     * Filtra las agencias según la categoría seleccionada
     */
    function filterAgencias() {
        let selectedFilter = 'todas';
        
        // Obtener el filtro seleccionado
        for (let radio of filterRadios) {
            if (radio.checked) {
                selectedFilter = radio.id;
                break;
            }
        }
        
        // Aplicar filtro a cada agencia
        agencias.forEach(agencia => {
            const categoria = agencia.getAttribute('data-categoria');
            
            if (selectedFilter === 'todas') {
                agencia.style.display = 'block';
            } else if (selectedFilter === 'aventura' && categoria === 'aventura') {
                agencia.style.display = 'block';
            } else if (selectedFilter === 'cultural' && categoria === 'cultural') {
                agencia.style.display = 'block';
            } else if (selectedFilter === 'luxury' && categoria === 'luxury') {
                agencia.style.display = 'block';
            } else {
                agencia.style.display = 'none';
            }
        });
    }
    
    // Agregar event listeners a los radios de filtro
    if (filterRadios.length > 0) {
        filterRadios.forEach(radio => {
            radio.addEventListener('change', filterAgencias);
        });
        
        // Ejecutar al cargar la página
        filterAgencias();
    }
    
    // ========== ANIMACIÓN DE ESTRELLAS (feedback visual) ==========
    const ratingStars = document.querySelectorAll('.rating-stars label');
    
    ratingStars.forEach(star => {
        star.addEventListener('click', function(e) {
            const ratingContainer = this.closest('.rating-interactivo');
            const agenciaCard = this.closest('.agencia-card');
            const agenciaName = agenciaCard?.querySelector('h3')?.innerText || 'Agencia';
            const starValue = this.innerText;
            
            // Efecto visual de confirmación
            ratingContainer?.classList.add('rated');
            setTimeout(() => {
                ratingContainer?.classList.remove('rated');
            }, 500);
            
            // Mostrar mensaje de agradecimiento (opcional)
            console.log(`¡Gracias por calificar ${agenciaName} con ${starValue} estrellas!`);
        });
    });
    
    // ========== EFECTO DE CARGA PARA LAS TARJETAS ==========
    const agenciaCards = document.querySelectorAll('.agencia-card');
    
    // Agregar animación de entrada con stagger effect
    if (agenciaCards.length > 0) {
        agenciaCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // ========== BOTONES DE CONTACTO ==========
    const contactButtons = document.querySelectorAll('.small-button');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const agenciaCard = this.closest('.agencia-card');
            const agenciaName = agenciaCard?.querySelector('h3')?.innerText || 'la agencia';
            
            // Mostrar alerta amigable (puedes reemplazar con un modal)
            alert(`📧 Gracias por tu interés en ${agenciaName}. En breve un asesor se comunicará contigo.`);
        });
    });
    
    // ========== TOOLTIP PARA RATING (mejora UX) ==========
    const ratingContainers = document.querySelectorAll('.rating-interactivo');
    
    ratingContainers.forEach(container => {
        container.setAttribute('title', 'Hacé clic en las estrellas para calificar');
    });
    
    // ========== LOG PARA DEPURACIÓN (solo en desarrollo) ==========
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('✅ Agencias.js cargado correctamente');
        console.log(`📊 Total de agencias: ${agencias.length}`);
        console.log(`🏷️ Filtros disponibles: ${filterRadios.length}`);
    }
    
})();