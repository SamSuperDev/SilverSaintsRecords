const form = document.getElementById('subscribeForm');
const message = document.getElementById('message');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    const response = await fetch('https://script.google.com/macros/s/AKfycbwFyfIERy80aQHx4WRKFWrrUcV1C8-xbSHEbyPlV_9bgiyCyUt-ZCJY2m0i1BVwF0wE/exec', {
        method: 'POST',
        body: new URLSearchParams({ 
        email: email,
        key: 'qakFer-qacwed-6kibre' // must match your script
        })
    });

    if (response.ok) {
        form.reset();
    }
});