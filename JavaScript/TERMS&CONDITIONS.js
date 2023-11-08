const agreeCheckbox = document.getElementById('agree');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
    if (!agreeCheckbox.checked) {
        event.preventDefault();
        alert('Please agree to the TERMS & CONDITIONS before submitting.');
    } else {
        window.location.href = '/HTML/index.html';
    }
});

agreeCheckbox.addEventListener('click', () => {
    if (agreeCheckbox.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
        alert('Please agree to the TERMS & CONDITIONS before submitting.');
    }
});
