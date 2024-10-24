document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Name validation
    if (name === '') {
        isValid = false;
        document.getElementById('name-error').textContent = 'Name is required.';
        document.getElementById('name-error').style.display = 'block';
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Email validation
    if (email === '') {
        isValid = false;
        document.getElementById('email-error').textContent = 'Email is required.';
        document.getElementById('email-error').style.display = 'block';
    } else if (!validateEmail(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Email is not valid.';
        document.getElementById('email-error').style.display = 'block';
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Subject validation
    if (subject === '') {
        isValid = false;
        document.getElementById('subject-error').textContent = 'Subject is required.';
        document.getElementById('subject-error').style.display = 'block';
    } else {
        document.getElementById('subject-error').style.display = 'none';
    }

    // Message validation
    if (message === '') {
        isValid = false;
        document.getElementById('message-error').textContent = 'Message is required.';
        document.getElementById('message-error').style.display = 'block';
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
