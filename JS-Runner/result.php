<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <?php echo $_POST["HTML"]; ?>
        <textarea id="out">console:</textarea>
        <script src="/JS-Runner/Runner.js"></script>
        <script><?php echo $_POST["JS"]; ?></script>
    </body>
</html>
