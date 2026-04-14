document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');
    const submitBtn = contactForm.querySelector('.submit-btn');

    // Función para mostrar errores de validación
    function showValidationErrors() {
        const invalidFields = contactForm.querySelectorAll(':invalid');
        invalidFields.forEach(field => {
            field.style.borderColor = '#f44336';
            if (field === invalidFields[0]) {
                field.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Función para limpiar estilos de validación
    function clearValidationStyles() {
        const allFields = contactForm.querySelectorAll('.form-control');
        allFields.forEach(field => {
            field.style.borderColor = '';
        });
    }

    // Manejar el envío del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearValidationStyles();
        
        // Validar todos los campos requeridos
        if (!contactForm.checkValidity()) {
            showValidationErrors();
            return;
        }

        // Mostrar spinner de carga
        submitBtn.classList.add('loading');
        
        // Simular envío del formulario
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            confirmationModal.classList.add('active');
            contactForm.reset();
            clearValidationStyles();
        }, 1500);
    });

    // Cerrar modal al hacer clic en el botón
    closeModal.addEventListener('click', function() {
        confirmationModal.classList.remove('active');
    });

    // Cerrar modal al hacer clic fuera del contenido
    confirmationModal.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('active');
        }
    });

    // Validación en tiempo real con micro-interacciones
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity() && this.value !== '') {
                this.style.borderColor = '#4CAF50';
                // Animación de feedback táctil
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            } else if (this.value !== '') {
                this.style.borderColor = '#f44336';
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });
        
        input.addEventListener('blur', function() {
            if (!this.checkValidity() && this.value !== '') {
                this.style.borderColor = '#f44336';
                // Shake animation para error
                this.style.animation = 'shake 0.3s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            }
        });
    });

    // Animación shake para errores
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && confirmationModal.classList.contains('active')) {
            confirmationModal.classList.remove('active');
        }
    });
});