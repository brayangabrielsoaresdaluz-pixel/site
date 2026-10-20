const formulario = document.getElementById("formulario-login");


formulario.addEventListener("submit", function (event) {


    event.preventDefault


const usuario = document.getElementById("usuario").value;
const senha = document.getElementById("senha").value;


const usuariocorreto = 'aluno';
const senhacorreta = '1234';


if (usuario === usuariocorreto && senha === senhacorreta){
    alert("Login corretoooooooo!");
} else {
    alert ("usuario ou senha incorreta, burro!");
}




}

