/**
 * blog.js - Funcionalidades para la página del blog
 * Scroll reveal, filtros por tags y formulario de comentarios
 */

(function() {
    'use strict';

    // ========== FILTRADO POR TAGS ==========
    const filterRadios = document.querySelectorAll('input[name="tag-filtro"]');
    const blogCards = document.querySelectorAll('.blog-card');
    
    function filterBlog() {
        let selectedFilter = 'tag-todos';
        
        // Obtener el filtro seleccionado
        for (let radio of filterRadios) {
            if (radio.checked) {
                selectedFilter = radio.id;
                break;
            }
        }
        
        // Extraer el tag del id (ej: "tag-aventura" -> "aventura")
        let filterValue = selectedFilter.replace('tag-', '');
        
        blogCards.forEach(card => {
            const cardTag = card.getAttribute('data-tag');
            
            if (filterValue === 'todos') {
                card.style.display = 'block';
            } else if (cardTag === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Agregar event listeners a los radios
    if (filterRadios.length > 0) {
        filterRadios.forEach(radio => {
            radio.addEventListener('change', filterBlog);
        });
        
        // Ejecutar al cargar
        filterBlog();
    }

    // ========== SCROLL REVEAL PARA ARTÍCULOS DEL BLOG ==========
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    blogCards.forEach(card => {
        revealObserver.observe(card);
    });

    // ========== FORMULARIO DE COMENTARIOS ==========
    const comentarioForm = document.getElementById('comentarioForm');
    if (comentarioForm) {
        comentarioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ ¡Gracias por tu comentario! Será publicado después de revisión.');
            comentarioForm.reset();
        });
    }
    
    // ========== ANIMACIÓN DE ENTRADA PARA COMENTARIOS ==========
    const comentarios = document.querySelectorAll('.comentario-card');
    comentarios.forEach((comentario, index) => {
        comentario.style.opacity = '0';
        comentario.style.transform = 'translateY(20px)';
        comentario.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            comentario.style.opacity = '1';
            comentario.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // ========== LOG PARA DEPURACIÓN ==========
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('✅ Blog.js cargado correctamente');
        console.log(`📊 Total de artículos: ${blogCards.length}`);
        console.log(`🏷️ Filtros disponibles: ${filterRadios.length}`);
    }
    
})();