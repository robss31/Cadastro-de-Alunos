const form1 = document.querySelector("#form1");
const login = document.querySelector("#login");
const senha = document.querySelector("#senha");

const Login = localStorage.getItem("Login");
const Senha= localStorage.getItem("Senha");


form1.addEventListener("submit", (event) => {
    event.preventDefault();

    if ((login.value === Login) && (senha.value === Senha )) {

        window.location.replace("http://127.0.0.1:5500/boasVinda.html")
        //form1.submit();
        return;

    } else {
        alert("Login ou Senha Inválidos");
        
    }

});

function cadastrar_aluno(){
    window.location.replace("http://127.0.0.1:5500/Cadastro.html");
}