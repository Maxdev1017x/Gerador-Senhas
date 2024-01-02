const passwordInput = document.getElementById("password");

// Comprimento da senha
const length = 16;

// Caracteres para a senha
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'; 
const number = '0123456789'; 
const symbol = '@#$%+-=_/|<>';

// Combina os caracteres em uma string
const allChars = upperCase + lowerCase + number + symbol;

// Função Gerar senha
function GeneratePassword() {
    let password = "";

    // Faz com que ao menos um caractere de cada tipo seja usado na senha
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Adicionando caracteres aleatórios até atingir o comprimento da senha
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Define o valor do campo de entrada da senha para a senha gerada
    passwordInput.value = password;

    // Não deixa editar a senha gerada
    passwordInput.readOnly = true;
}


// Função para copiar a senha gerada
function copyToClipboard() {
    // Seleciona o texto do campo de entrada da senha
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // Copiar senha em dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    alert("Senha copiada com sucesso!!!");
}

