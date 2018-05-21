<!DOCTYPE html>
<html lang="pl-PL">

<head>
  <meta charset="UTF-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="./styles.css">
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
</head>
<body>
  <?php require_once "cart.php"; ?>
  <?php require_once "product_list.php"; ?>
  <script>
  function cartAction(action, product_code) {
    var queryString = "";
    if (action != "") {
        switch (action) {
        case "add":
            queryString = 'action=' + action + '&id=' + product_code
                    + '&quantity=' + $("#quantity_" + product_code).val();
            break;
        case "remove":
            queryString = 'action=' + action + '&id=' + product_code;
            break;
        case "buy":
            queryString = 'action=' + action;
            break;
        case "empty":
            queryString = 'action=' + action;
            break;
        }
    }
    jQuery.ajax({
        url : "cart.php",
        data : queryString,
        type : "POST",
        success : function(data) {
           $(location).attr('href','index.php');
        },
        error : function() {
        }
    });
  }
  </script>
</body>
</html>
