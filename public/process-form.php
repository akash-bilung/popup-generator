<?php
    $jsfile = $_POST["fileTitle"];
    $popupname = $_POST["popupName"];
    $jscode =  $_POST["snippet"];

    $handle = fopen($jsfile, "w");
    fwrite($handle, $jscode);
    fclose($handle);
?>