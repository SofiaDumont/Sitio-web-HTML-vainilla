document.addEventListener('DOMContentLoaded', () => {
    const openReservationModal = document.getElementById('openReservationModal');
    const reservationMessage = document.getElementById('reservationMessage');

    openReservationModal.addEventListener('click', () => {
        reservationMessage.classList.add('show'); // Mostrar el mensaje

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            reservationMessage.classList.remove('show');
        }, 3000);
    });
});