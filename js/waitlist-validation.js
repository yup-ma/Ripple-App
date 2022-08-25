const waitlist_form = document.getElementById('waitlist-form');


waitlist_form.addEventListener('submit', function(e){
    
    e.preventDefault();
    validateEmail();
})

function validateEmail(){
    const email = document.getElementById('waitlist-input').value;
    const validation_badge = document.getElementById('validation-badge');
    const re =/^\S+@\S+\.\S+$/;

    if(!re.test(email.toLowerCase()) || email == null )
    {
        validation_badge.innerHTML = "Invalid email. Check and try again.";
        validation_badge.classList.add('error');
        validation_badge.classList.add('show');
    }
    else
    {
        validation_badge.innerHTML = 'Awesome! You are now on the waitlist. <img src="/src/img/party-icon.png" alt="" class="icon">';
        validation_badge.classList.remove('error');
        validation_badge.classList.add('show');
        waitlist_form.submit();

    }
}
