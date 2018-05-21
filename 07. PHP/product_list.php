<?php
	require_once 'db_connection.php';
		
  $products_array = GetAllProducts();
	if(!empty($products_array)){
   ?>
	<div id="product-list">
        <div class="header">Products</div>
	<table>
  <tbody>
		<tr>
			<th>Name</th>
			<th colspan="2">Quantity</th>
		</tr>
	<?php		
		foreach($products_array as $key=>$value){?>
			<tr class="product-item">
				<form method="post" action="index.php?action=add&id=<?php echo $products_array[$key]["id"]; ?>">
				<td class=product-name"><?php echo $products_array[$key]["nazwa"]; ?></td>
				<td>
                                    <input type="text" name="quantity" value="1" size="2" 
                                        id="quantity_<?php echo $products_array[$key]["id"] ?>" />
                                </td>
				<td>
                                    <input type="submit" value="Add to cart" 
                                        onClick="cartAction('add', '<?php echo $products_array[$key]["id"]  ?>')" />
                                </td>
				</form>
			</tr>
	<?php } ?>
  </tbody>
	</table>
	</div>
	<?php }
?>
