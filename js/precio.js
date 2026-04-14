// Lógica para el Switch de Temporadas
const planToggle = document.getElementById('plan-toggle');
const lowPrices = document.querySelectorAll('.price.low-season');
const highPrices = document.querySelectorAll('.price.high-season');

if (planToggle) {
    planToggle.addEventListener('change', function() {
        if (this.checked) {
            // Mostrar Temporada Alta
            lowPrices.forEach(p => p.style.display = 'none');
            highPrices.forEach(p => p.style.display = 'block');
        } else {
            // Mostrar Temporada Baja
            lowPrices.forEach(p => p.style.display = 'block');
            highPrices.forEach(p => p.style.display = 'none');
        }
    });
}