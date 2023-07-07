<?php

    try {
        $conn = new PDD('mysql:host=localhost;dbnome=alunoDB', 'root', ''); 
    } catch (PDOException $e) {
        $e->getMessage();
    }