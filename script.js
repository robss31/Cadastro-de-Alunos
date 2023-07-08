'use strict';


const myForm = document.querySelector("#myForm")
const inputnome_aluno = document.querySelector("#nome_aluno")
const inputemail = document.querySelector("#email")
const inputmatricula = document.querySelector("#matricula")
const inputsenha = document.querySelector("#senha")
const inputtel = document.querySelector("#tel")
const inputsexo = document.querySelector("#sexo")

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if ((inputnome_aluno.value === "") || (inputemail.value === "") || (inputmatricula.value === "") || (inputsenha.value === "") || (inputtel.value === "") ||
        (inputsexo.value === "")) {
        alert("Preencha Todos os Campos");
        return;

    } else {
        const myForm = document.getElementById("myForm");
        const formData = new FormData(this);
        const searchParams = new URLSearchParams();

        for (const par of formData) {
            searchParams.append(par[0], par[1]);    /*, par[2], par[3], par[4], par[5]);*/

        }

        fetch('cadastrodealuno.php', {
            method: 'POST',
            body:formData
        }).then(function (response) {
            document.getElementById('nome_aluno').value = " ";
            document.getElementById('email').value = " ";

            /*document.getElementById('matricula').value = " ";
            document.getElementById('senha').value = " ";
            document.getElementById('tel').value = " ";
            document.getElementById('sexo').value = " ";
            return alert('Dados gravados com sucesso!');*/

        }).catch(function (error) {
            console.log(error);
        })



        window.alert("Aluno Cadastrado Com Sucesso");
        window.location.replace("http://127.0.0.1:5500/index.html");


    }
});

