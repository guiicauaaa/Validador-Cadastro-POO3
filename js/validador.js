// REFERÊNCIAS AOS ELEMENTOS DA TELA
// const: cada variável aponta sempre para o mesmo elemento, então não precisa ser let.
const formulario = document.getElementById("formCadastro");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagemErro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// VALIDAR O CADASTRO QUANDO O FORMULÁRIO FOR ENVIADO
function validarCadastro(e) {
    // Impede o comportamento padrão do submit, que recarregaria a página
    e.preventDefault();

    // CAPTURAR OS VALORES DOS CAMPOS (trim tira os espaços do começo e do fim)
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const senha = campoSenha.value.trim();

    // VERIFICAR SE ALGUM CAMPO ESTÁ VAZIO
    if (nome === "" || email === "" || senha === "") {
        mensagemSucesso.textContent = "";
        mensagemErro.textContent = "Preencha todos os campos: nome, e-mail e senha.";
        return;
    }

    // TUDO PREENCHIDO: MOSTRAR A MENSAGEM DE SUCESSO E LIMPAR OS CAMPOS
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = `Sucesso! Cadastro de ${nome} enviado.`;
    campoNome.value = "";
    campoEmail.value = "";
    campoSenha.value = "";
}

formulario.addEventListener("submit", validarCadastro);
