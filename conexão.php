<?php

    try {
        $conn = new PDD('mysql:host=localhost;dbnome=alunosDB', 'root', ''); 
    } catch (PDOException $e) {
        $e->getMessage();
    }