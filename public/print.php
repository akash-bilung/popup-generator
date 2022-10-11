<?php
    ectract($_REQUEST);
    $file=fopen("file.js" "a");
    fwrite($file, "console.log('Hello World')");
    fclose($file)
?>