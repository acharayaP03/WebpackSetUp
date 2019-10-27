import '../css/main.css'
import { secretButton, secretParagraph } from "./input-elements";
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

// const outputParagraph = document.querySelector('#outputParagraph');

// const outputRandomInt = () => {
//     outputParagraph.textContent = RandomGenerator.randomInteger();
// };

// const outputRandomRange = () => {
//     outputParagraph.textContent = RandomGenerator.randomRage(1, 500);
// };

// const buttonRandomInt = document.querySelector('#randomInt');
// const buttonRandomRange = document.querySelector('#rabdomRange');

// buttonRandomInt.addEventListener('click', outputRandomInt);
// buttonRandomRange.addEventListener('click', outputRandomRange);