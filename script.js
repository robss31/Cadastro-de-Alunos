const form = document.querySelector("#form")
const inputname = document.querySelector("#name")
const inputemail = document.querySelector("#email")
const inputlogin = document.querySelector("#login")
const inputsenha = document.querySelector("#password")
const inputtel = document.querySelector("#tel")
const inputsexo = document.querySelector("#sexo")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if ((inputname.value === "") || (inputemail.value === "") || (inputlogin.value === "") || (inputsenha.value === "") || (inputtel.value === "") ||
        (inputsexo.value === "")) {
        alert("Preencha Todos os Campos");
        return;

    } else {
        //alert("Deus é maior");

        localStorage.setItem("Nome", inputname.value);
        localStorage.setItem("Email", inputemail.value);
        localStorage.setItem("Login", inputlogin.value);
        localStorage.setItem("Senha", inputsenha.value);
        localStorage.setItem("Telefone", inputtel.value);
        localStorage.setItem("Sexo", inputsexo.value);


        window.alert("Cadastrado com sucesso");
        window.location.replace("http://127.0.0.1:5500/index.html");

       // form.submit();
    }
});







































/*
function isEmailValido(email){
    const emailRegex = new RegExp(
        /^[a-zA-z0-9._-] + @[a-zA-z0-9._]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return false;
    }

    return false;
}






/*inserir  algo no localStorege
localStorage.setItem("name", "Robson");
localStorage.setItem("name1", "Alcione");

localStorage.setItem("num", "1");
localStorage.setItem("num1", "2");

const num2= localStorage.getItem("num");
const num3= localStorage.getItem("num1");

console.log(num2);


// buscar  o que tem no banco
const nome= localStorage.getItem("name1");
console.log(nome);


//verificar o tipo
console.log(typeof localStorage.getItem("num2"))

// apagar um item do banco
//localStorage.removeItem("name");

// Apagar tudo que estiver no banco
//localStorage.clear()
*/
