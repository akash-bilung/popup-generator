<?php
    $jsfile = $_POST["file"];
    $popupname = $_POST["popupName"];
    $jscode =  $_POST["code"];

    $handle = fopen($jsfile, "w");
    fwrite($handle, $jscode);
    fclose($handle);
?>