function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  if (nombre.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      return false;
  }

  if (email.trim() === '') {
      alert('Por favor, ingresa tu email.');
      return false;
  }

  if (mensaje.trim() === '') {
      alert('Por favor, ingresa un mensaje.');
      return false;
  }

  // Validación de formato de correo electrónico
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return false;
  }

  // Si todas las validaciones pasan, se puede enviar el formulario
  alert('Formulario enviado exitosamente.');
  return true;
}

window.onscroll = function() {
  var backToTopBtn = document.getElementById('backToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

// Función para desplazarse suavemente a la parte superior
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}