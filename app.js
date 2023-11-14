let inp1 = document.querySelector(".under_root")
let inp2 = document.querySelector(".answer_input")

const root_by_Taylor = (number, precision, rootPower = 2) => {
    let guess = number; 
    let difference = 1; 

    while (difference > precision) {
        const newGuess = ((rootPower - 1) * guess + number / Math.pow(guess, rootPower - 1)) / rootPower;
        difference = Math.abs(guess - newGuess); 
        guess = newGuess; 
    }
    
    return guess;
}

inp1.oninput = () => {
    const number = inp1.value;
    const precision = 1e-7;
    const rootPower = 3; // For cube root

    const result = root_by_Taylor(number, precision, rootPower);
    inp2.value = `Корень ${rootPower} из ${number} ≈ ${result.toFixed(6)}`;
}

