<?php

if($_POST['upload'])
{
    $filename = $_FILES['pic']['name'];
    $size = $_FILES['pic'].['size'];
    $type = $_FILES['pic'].['type'];

    echo "name: $filename , type: $type, size: $size, ";
}

?>