const form = document.querySelector("#form")
const inputname = document.querySelector("#name")
const inputemail = document.querySelector("#email")
const inputmatricula = document.querySelector("#matricula")
const inputsenha = document.querySelector("#password")
const inputtel = document.querySelector("#tel")
const inputsexo = document.querySelector("#sexo")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if ((inputname.value === "") || (inputemail.value === "") || (inputmatricula.value === "") || (inputsenha.value === "") || (inputtel.value === "") ||
        (inputsexo.value === "")) {
        alert("Preencha Todos os Campos");
        return;

    } else {

        const dataform = new DataForm (this);
        const searchParams = new  URLSearchParams();

        for (const par of dataform ){
            searchParams.append(par[0], par[1], par[2], par[3], par[4], par[5]);

        }
        
        fetch('cadastrodealuno.php',{
            method: 'post',
            body:Dataform
        }).then(function(response){
            document.getElementById('nome').value= " " ;
            document.getElementById('email').value= " ";
            document.getElementById('matricula').value= " ";
            document.getElementById('senha').value= " ";
            document.getElementById('telefone').value= " ";
            document.getElementById('sexo').value= " ";
            return alert('Dados gravados com sucesso!');
        }).catch(function(error){
            console.log(erro);
        })



        window.alert("Aluno Cadastrado Com Sucesso");
        window.location.replace("http://127.0.0.1:5500/index.html");

        
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
