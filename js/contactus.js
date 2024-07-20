document.getElementById('contact-form').addEventListener('submit', function(event) 
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) 
    {
        document.getElementById('form-response').innerText = 'Thank you for your message!';
        document.getElementById('form-response').style.color = 'green';

        document.getElementById('contact-form').reset();
    }
    else 
    {
        document.getElementById('form-response').innerText = 'Please fill in all fields.';
        document.getElementById('form-response').style.color = 'red';
    }
});