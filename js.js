let theForm = document.getElementById('theForm');
let email = document.getElementById('email');
let country = document.getElementById('country');
let zip = document.getElementById('zip');
let pass = document.getElementById('pass');
let conf = document.getElementById('cpass');
let submit = document.getElementById('submitBtn');

let inputs = [email, country, zip, pass, conf];

for(const input of inputs){
    input.addEventListener('input', ()=> generalChecks(input))
    input.validity.valid = false;
}
function generalChecks(input) {
    /*if (input.validity.valueMissing) {
      input.validity.valid = false;
      input.setCustomValidity("fill dis out!");
    } else */if (input === email && input.validity.typeMismatch) {
      input.validity.valid = false;
      input.setCustomValidity("you call that an email?");
    }
    else if(input === country && input.value.length < 2){
      input.validity.valid = false;
      input.setCustomValidity("you call that a country?");
    }
    else if(input === zip && input.value.length < 5){
      input.validity.valid = false;
      input.setCustomValidity("you call that a zip code?");
    }
    else if(input === zip && input.value.length > 5){
      input.validity.valid = false;
      input.setCustomValidity("just the first 5, stupid!");
    }
    else if(input === pass && input.value.length < 8){
      input.validity.valid = false;
      input.setCustomValidity("too short! u tryna get hacked?");
    }
    else if(input === cpass && input.value !== pass.value){
      input.validity.valid = false;
      input.setCustomValidity("passwords don't match, idiot!");
    }
    else if(input.value.length > 1) {
      input.validity.valid = true;
      input.setCustomValidity("");
    }
    else {
      input.validity.valid = false;
      input.setCustomValidity("");
    }
    input.reportValidity();

    if (input.validity.valid) {
      input.style.backgroundColor = "lime";
    } else {
      input.style.backgroundColor = "pink";
    }
  }
let score = 0;
function attemptSubmit(){
    event.preventDefault();
    
    for(const input of inputs){
        input.reportValidity();
        if(input.validity.valid){
            score++;
        }
    }
    if(score === 5){
      alert('YOU DID IT!');
    }
}