function showBookingMessage(event) {
    event.preventDefault();
    alert('Your request for booking has been sent');
    event.target.submit();
}