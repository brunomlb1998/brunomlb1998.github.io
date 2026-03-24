const formContato = document.querySelector("#form-contato");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const mensagemInput = document.querySelector("#mensagem");
const mensagemFormulario = document.querySelector("#mensagem-formulario");

function mostrarMensagem(texto, tipo) {
    mensagemFormulario.textContent = texto;
    mensagemFormulario.className = "mensagem-formulario " + tipo;
}

function emailValido(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}

// Validacao simples.
if (formContato && nomeInput && emailInput && mensagemInput && mensagemFormulario) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        if (!nome || !email || !mensagem) {
            mostrarMensagem("Preencha nome, e-mail e mensagem.", "erro");
            return;
        }

        if (!emailValido(email)) {
            mostrarMensagem("Digite um e-mail válido.", "erro");
            return;
        }

        formContato.reset();
        mostrarMensagem("Mensagem enviada com sucesso!", "sucesso");
    });
}