document.addEventListener('DOMContentLoaded', function() {
    const pickInput = document.getElementById('pick');
    const dropInput = document.getElementById('drop');
    const form = document.getElementById('rentalForm');

    pickInput.addEventListener('change', calculateDateDifference);
    dropInput.addEventListener('change', calculateDateDifference);

    form.addEventListener('submit', validateForm);

    function calculateDateDifference() {
        const pickDate = document.getElementById('pick').value;
        const dropDate = document.getElementById('drop').value;
        const priceText = document.querySelector('.price').innerText;
        const pricePerDay = parseInt(priceText.match(/₹(\d+)/)[1]);

        if (pickDate && dropDate) {
            const pick = new Date(pickDate);
            const drop = new Date(dropDate);
            const timeDifference = drop.getTime() - pick.getTime();
            const dayDifference = timeDifference / (1000 * 3600 * 24);

            if (dayDifference >= 0) {
                const totalAmount = dayDifference * pricePerDay;
                document.getElementById('cash').innerText = `Total Amount: ₹${totalAmount}`;
                localStorage.setItem('totalAmount', totalAmount);
            } else {
                document.getElementById('cash').innerText = 'Total Amount: Drop date must be after Pickup date';
            }
        }
    }

    function validateForm(event) {
        event.preventDefault();

        const location = document.getElementById('location').value;
        const pickDate = document.getElementById('pick').value;
        const dropDate = document.getElementById('drop').value;

        if (!location || !pickDate || !dropDate) {
            alert('Please fill in all fields before proceeding.');
            return false;
        } else {
            // Proceed with redirection
            window.location.href = 'http://localhost:3000/';
        }
    }
});

function closeTab() {
    window.close();
}
