// Inicialização do Carrinho
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Atualizar Contador do Carrinho
function updateCartCounter() {
    const counter = document.querySelector('.cart-counter');
    counter.textContent = cartItems.length;
}

// Controle do Scroll do Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Busca Inteligente
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    // Implementar lógica de busca aqui
    console.log('Termo buscado:', e.target.value);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();
    
    // Animar dropdown ao abrir
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('shown.bs.dropdown', () => {
            menu.style.animation = 'slideIn 0.3s ease-out';
        });
    });
});

// Otimização de Performance
let timeout;
window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        // Atualizar elementos responsivos
    }, 100);
});
// Timer para Ofertas Relâmpago
function updateFlashSaleTimer() {
    const timerElement = document.querySelector('.sale-timer');
    let timeLeft = 2 * 60 * 60; // 2 horas

    const timer = setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        timerElement.innerHTML = `
            <i class="bi bi-clock"></i> 
            ${hours.toString().padStart(2, '0')}:
            ${minutes.toString().padStart(2, '0')}:
            ${seconds.toString().padStart(2, '0')}
        `;

        if(timeLeft <= 0) clearInterval(timer);
        timeLeft--;
    }, 1000);
}

// Newsletter Subscription
document.querySelector('.newsletter-form button').addEventListener('click', () => {
    const email = document.querySelector('.newsletter-form input').value;
    if(validateEmail(email)) {
        // Implementar API call
        alert('Obrigado por se inscrever!');
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateFlashSaleTimer();
});
// Inicialização do Carrossel com Autoplay
const bannerCarousel = new bootstrap.Carousel('#bannerCarousel', {
    interval: 3000, // 5 segundos
    wrap: true,
    pause: false
});

// Pausar ao passar o mouse
document.getElementById('bannerCarousel').addEventListener('mouseenter', () => {
    bannerCarousel.pause();
});

document.getElementById('bannerCarousel').addEventListener('mouseleave', () => {
    bannerCarousel.cycle();
});

// Adicionar Indicadores Dinamicamente
const carouselItems = document.querySelectorAll('#bannerCarousel .carousel-item');
const indicatorsContainer = document.createElement('div');
indicatorsContainer.className = 'carousel-indicators';

carouselItems.forEach((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.bsTarget = '#bannerCarousel';
    button.dataset.bsSlideTo = index;
    if(index === 0) button.classList.add('active');
    indicatorsContainer.appendChild(button);
});

document.getElementById('bannerCarousel').appendChild(indicatorsContainer);