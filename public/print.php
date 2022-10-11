<?php
    $handle = fopen("read.js", "w");
    $string = "console.log('Hello World')";
    fwrite($handle, $string);
    fclose($handle);
?>