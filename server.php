<?php
$_POST = json_decode(file_get_contents("php://input"), true);//на php коде получение json файлов
echo var_dump($_POST);