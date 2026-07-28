// 1. Obtenemos los elementos del HTML
const selectPaquete = document.getElementById('paquete');
const inputInvitados = document.getElementById('invitados');
const spanTotal = document.getElementById('totalEstimado');
const btnWhatsapp = document.getElementById('btnWhatsapp');

// 2. Función para actualizar el precio en pantalla
function actualizarTotal() {
  const precioPorPersona = parseFloat(selectPaquete.value);
  const numeroInvitados = parseInt(inputInvitados.value);
  
  // Calculamos y mostramos el total
  const total = precioPorPersona * numeroInvitados;
  spanTotal.innerText = total.toLocaleString('es-MX'); // Le da formato de miles
}

// 3. Escuchamos los cambios en tiempo real
selectPaquete.addEventListener('change', actualizarTotal);
inputInvitados.addEventListener('input', actualizarTotal);

// 4. La magia de WhatsApp
btnWhatsapp.addEventListener('click', () => {
  // Sacamos los datos actuales
  const opcionSeleccionada = selectPaquete.options[selectPaquete.selectedIndex];
  const nombrePaquete = opcionSeleccionada.getAttribute('data-nombre');
  const numeroInvitados = inputInvitados.value;
  const totalCotizado = spanTotal.innerText;
  
  // Numero de telefono
  const telefono = "5200000000"; 
  
  // Mensaje prearmado
  const mensaje = `¡Hola! Me gustaría confirmar una cotización desde su página web. 🍽️\n\n*Detalles del evento:*\n- Menú: ${nombrePaquete}\n- Personas: ${numeroInvitados}\n- Total estimado: $${totalCotizado}\n\n¿Me podrían ayudar a afinar los últimos detalles?`;
  
  // Codificamos el texto para que las URLs no se rompan con los espacios y saltos de línea
  const mensajeCodificado = encodeURIComponent(mensaje);
  
  // Link final y pagina de whatsapp
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  window.open(urlWhatsApp, '_blank');
});