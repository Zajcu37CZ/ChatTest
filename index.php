<?php
if (isset($_POST['input'])) {
    $text = trim($_POST['input']);
    if ($text != "") {
        $f = fopen("chat.txt", "a");
        fwrite($f, $text."\n");
        fclose($f);
        echo file_get_contents("chat.txt");
    }
}
else {
    echo file_get_contents("./chat.txt");
}
?><textarea class="form-control mb-3" rows="20" id="chat" readonly></textarea>
