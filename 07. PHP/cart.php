<?php
  require_once 'db_connection.php';

	session_start();
  $products_array = GetAllProducts();
	if(!empty($_POST["action"])) {
		switch($_POST["action"]) {
			case "add":
        if(!empty($_POST["quantity"])){
          $cart_array = array_keys($_SESSION["cart_item"]);
          if(in_array($_POST["id"],$cart_array)){
            $_SESSION["cart_item"][$_POST["id"]]["quantity"] += $_POST["quantity"];
          } 
          else {
            foreach($products_array as $product){
              if($product["id"] == $_POST["id"]){
                $item = $product;
                break;
              }
            }
            $_SESSION["cart_item"][$_POST["id"]]["name"] = $item["nazwa"];
            $_SESSION["cart_item"][$_POST["id"]]["quantity"] = $_POST["quantity"];
          }
				}
      break;
      case "remove":
        if(!empty($_SESSION["cart_item"])){
          foreach($_SESSION["cart_item"] as $k => $v) {
	          if($_POST["id"] == $k){
	          unset($_SESSION["cart_item"][$k]);
	          if(empty($_SESSION["cart_item"]))
                unset($_SESSION["cart_item"]);
            }
          }
        }
      break;
      case "buy":
        if(!empty($_SESSION["cart_item"])){
          unset($_SESSION["cart_item"]);
        }
      break;
      case "empty":
        unset($_SESSION["cart_item"]);
      break;
		}
	}
?>

<div id="cart-list">
<div class="header">Shopping Cart</div>
<div id="cart-actions">
  <a id="btnEmpty" class="cart-action" onClick="cartAction('empty','');">Empty Cart</a>
  <a id="btnBuy" class="cart-action" onClick="cartAction('buy','');">Buy</a>
</div>
<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Quantity</th>
    <th>Remove</th>
  </tr>

  <?php 
  if(isset($_SESSION["cart_item"])){
    foreach ($_SESSION["cart_item"] as $key=>$item){ ?>
    <tr>
      <td><?php echo $item["name"]; ?></td>
      <td><?php echo $item["quantity"]; ?></td>
      <td><a onClick="cartAction('remove','<?php echo $key; ?>')" class="btnRemoveAction cart-action">R</a></td>
    </tr>
  <?php }} ?>
</tbody>
</table>
</div>
