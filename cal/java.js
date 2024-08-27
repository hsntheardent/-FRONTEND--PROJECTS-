let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText === '=') {
            string = String(eval(string));
            inputBox.value = string;
        } else if (b.target.innerText) {
            // Condition here if needed
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});
