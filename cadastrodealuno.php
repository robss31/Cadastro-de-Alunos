<?php

    include_once(conexao.php);

    $nome_aluno=$_POST['nome'];
    $email = $_POST['email'];
    $login = $_POST['matricula'];
    $senha = $_POST['senha'];
    $tel = $_POST['tel'];
    $sexo = $_POST['sexo'];

    $SQL = 'INSERT INTO tbalunos(nome, email, matricula, senha, tel, sexo) VALUES (:nome, :email, :matricula, :senha, :tel, :sexo');
    $stmt = $conn -> prepare($sql);
    $stmt-> bindParam(':nome', $nome);
    $stmt-> bindParam(':email', $email);
    $stmt-> bindParam(':matricula', $matricula);
    $stmt-> bindParam(':senha', $senha);
    $stmt-> bindParam(':tel', $tel);
    $stmt-> bindParam(':sexo', $sexo);

    $stmt->execute();