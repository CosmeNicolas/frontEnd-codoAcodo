function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  // Expresión regular para evitar caracteres especiales
  var sinCaracteresEspeciales = /^[a-zA-Z0-9\s]+$/;

  // Validación del nombre
  if (nombre.trim() === '') {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingresa tu nombre.'
      });
      return false;
  }
  if (!sinCaracteresEspeciales.test(nombre)) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El nombre no debe contener caracteres especiales.'
      });
      return false;
  }

  // Validación del correo electrónico
  if (email.trim() === '') {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingresa tu email.'
      });
      return false;
  }
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingresa un email válido.'
      });
      return false;
  }
  if (!sinCaracteresEspeciales.test(email.split('@')[0])) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El email no debe contener caracteres especiales antes del @.'
      });
      return false;
  }

  // Validación del mensaje
  if (mensaje.trim() === '') {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingresa un mensaje.'
      });
      return false;
  }
  if (!sinCaracteresEspeciales.test(mensaje)) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El mensaje no debe contener caracteres especiales.'
      });
      return false;
  }

  // Si todas las validaciones pasan, se puede enviar el formulario
  Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Formulario enviado exitosamente.'
  });
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


