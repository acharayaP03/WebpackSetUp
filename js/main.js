var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);

function toggleSecretState(){
    showSecret = !showSecret;
    updatasecretParagraph();
    updateSecretButton();
}

function updateSecretButton(){
    if(showSecret){
        secretButton.textContent = "Content has been hidden"
    } else {
        secretButton.textContent = "Show The secret"
    }
}

function updatasecretParagraph(){
    if(showSecret){
        secretParagraph.style.display = "block"
    } else {
        secretParagraph.style.display = "none"
    }
}