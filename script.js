//inicializacao
const generatedNumber = Math.floor(Math.random() * 100) + 1;
let remaingAttempts = 10;
window.onload = updateAttempts();
//atualizar tentativas
function updateAttempts() {
    document.getElementById("remaingAttempts").innerText = `Número de tentativas restantes ${remaingAttempts}`;
}
//tentativa
function attempt() {
    let guess = Number(document.getElementById("guessNumber").value);
    if (guess >= 1 && guess <= 100) {
        if (guess == generatedNumber) {
            document.getElementById("nextToNumber").innerText = `Você acertou!`;
            document.getElementById("botao").disabled = true;
        } else if(guess < generatedNumber) {
            document.getElementById("nextToNumber").innerText = `O número secreto é maior`;
        } else {
            document.getElementById("nextToNumber").innerHTML = `O número secreto é menor`
        }
        remaingAttempts = remaingAttempts - 1;
        if (remaingAttempts == 0) {
            document.getElementById("nextToNumber").innerHTML = `Você perdeu! O número secreto era ${generatedNumber}`;
            document.getElementById("botao").disabled = true;
        }
        updateAttempts();
    } else {
        window.alert("O número deve ser válido entre 1 e 100");
        return;
    }
}