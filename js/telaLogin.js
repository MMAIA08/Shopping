// Toggle Password Visibility
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', (e) => {
        const input = button.previousElementSibling;
        const icon = button.querySelector('i');
        
        if(input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('bi-eye-slash', 'bi-eye');
            button.classList.add('active');
        } else {
            input.type = 'password';
            icon.classList.replace('bi-eye', 'bi-eye-slash');
            button.classList.remove('active');
        }
    });
});

// Form Validation
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');

    if(!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // Simulação de login
    const formData = {
        email: email.value,
        password: password.value
    };

    console.log('Dados do login:', formData);
    
    // Exemplo de feedback
    showAlert('success', 'Login realizado com sucesso! Redirecionando...');
    setTimeout(() => window.location.href = 'profile.html', 2000);
});

// Alert System
function showAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.querySelector('.login-card').prepend(alert);
}