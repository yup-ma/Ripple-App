const contact_form = document.getElementById('contact-form');
const email = document.getElementById('email');
const message = document.getElementById('email-message');
const subject = document.getElementById('subject');

contact_form.addEventListener('submit', function(e){
    
    
    const email_validated = validateEmail();
    const messasge_validated =  validateMessage();
    e.preventDefault();
    if( email_validated && messasge_validated ){

        submitForm();
    } 
})

email.addEventListener('focus', function(){
    const email_placeholder = document.getElementById('email-placeholder');

    email_placeholder.classList.add('focus');
    email.classList.add('focus');
})

email.addEventListener('blur', function(){
    const placeholder = document.getElementById('email-placeholder');

    if(email.value == ''){
        placeholder.classList.remove('focus');
        email.classList.remove('focus');
    }
    
})
email.addEventListener('keyup', function(){
    const invalid_text = document.getElementById('email-invalid-text');
    const invalid_icon = document.getElementById('email-invalid-icon');

    if(invalid_text.classList.contains('show')){
        invalid_text.classList.remove('show');
        invalid_icon.classList.remove('show');
    }
    
})
message.addEventListener('keyup', function(){
    const invalid_text = document.getElementById('message-invalid-text');
    const invalid_icon = document.getElementById('message-invalid-icon');

    if(invalid_text.classList.contains('show')){
        invalid_text.classList.remove('show');
        invalid_icon.classList.remove('show');
    }
    
})

subject.addEventListener('focus', function(){
    const placeholder = document.getElementById('subject-placeholder');

    placeholder.classList.add('focus');
    subject.classList.add('focus');
})

subject.addEventListener('blur', function(){
    const placeholder = document.getElementById('subject-placeholder');

    if(subject.value == ''){
        placeholder.classList.remove('focus');
        subject.classList.remove('focus');
    }
    
})

function validateEmail(){
    
    const invalid_text = document.getElementById('email-invalid-text');
    const invalid_icon = document.getElementById('email-invalid-icon');
    const re =/^\S+@\S+\.\S+$/;

    if(email.value == '' || email.value == null )
    {
        invalid_text.innerText = "Required";
        invalid_text.classList.add('show');
        invalid_icon.classList.add('show');
        return false;

    }
    else if(!re.test(email.value.toLowerCase()) )
    {
        invalid_text.innerText = "Invalid email. Check and try again.";
        invalid_text.classList.add('show');
        invalid_icon.classList.add('show');
        return false;
    }
    else
    {

        invalid_text.classList.remove('show');
        invalid_icon.classList.remove('show');
        return true;
    }
}

function validateMessage(){
    
    const invalid_text = document.getElementById('message-invalid-text');
    const invalid_icon = document.getElementById('message-invalid-icon');
    const white_spaces = /^\s+$/;
    if(message.value == '' || message.value == null || white_spaces.test(message.value.toLowerCase())){
        invalid_text.innerText = "Required";
        invalid_text.classList.add('show');
        invalid_icon.classList.add('show');
      
        return false;
    }
    else
    {
        invalid_text.classList.remove('show');
        invalid_icon.classList.remove('show');
        return true;
    }
}

function submitForm() {
    var xhr = new XMLHttpRequest();
    var server_message = '';
    const validation_badge = document.getElementById('validation-badge');
    const badge_animation_time = 300;
    // const firebase_id = 'ripple-8e23c';
    const firebase_id = 'contact567-c364d';
    validation_badge.innerHTML = 'Sending email <img class="validation-badge-sending-img" src="../src/img/ripple-icon-logo.png" alt="Sending image">';
    validation_badge.classList.add('show');

    xhr.open('POST', `https://us-central1-${firebase_id}.cloudfunctions.net/sendmail/send`);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.addEventListener( 'load', function(event) {
        validation_badge.classList.remove('show');
        setTimeout(()=>{
            server_message = event.target.responseText;
            validation_badge.innerHTML = server_message;
            validation_badge.classList.add('show');
            emptyValues();
        }, badge_animation_time)
        

    } );
    xhr.addEventListener( "error", function( event ) {
        validation_badge.classList.remove('show');
        
        setTimeout(()=>{
            server_message = event.target.responseText;
            validation_badge.innerHTML = server_message;
            validation_badge.classList.add('show');
        }, badge_animation_time)
    } );

    var data =  '&email=' + email.value +
                '&message=' + message.value +
                '&subject=' + subject.value;

    xhr.send(encodeURI(data));

}

function emptyValues(){
    contact_form.reset();
}