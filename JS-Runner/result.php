<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <?php echo $_GET["HTML"]; ?>
        <textarea id="out">console:</textarea>
        <script src="/JS-Runner/Runner.js"></script>
        <script><?php echo $_GET["JS"]; ?></script>
    </body>
</html>
