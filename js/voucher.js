document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('voucherModal');
    var span = document.getElementsByClassName('close')[0];

    function showModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.getElementById('claim-form').addEventListener('submit', function(event) {
        event.preventDefault();
        showModal();
    });

    document.getElementById('buy-form').addEventListener('submit', function(event) {
        event.preventDefault();
        showModal();
    });

    span.onclick = function() {
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});

// "I am done Javascript" -Isaac Carreon- 