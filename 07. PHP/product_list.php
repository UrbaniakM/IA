<?php
	include 'db_connection.php';
		
	$connection = Connect();
    
	$result = $connection->query("SELECT * FROM `produkty-php` ORDER BY id ASC");
   $products_array = $result->fetch_all(MYSQLI_ASSOC);
	if(!empty($products_array)){
   ?>
	<div id="product-list">
	<table>
		<tr>
			<th>Name</th>
			<th colspan="2">Quantity</th>
		</tr>
	<?php		
		foreach($products_array as $key=>$value){?>
			<tr class="product-item">
				<form method="post" action="index.php?action=add&code=<?php echo $products_array[$key]["id"]; ?>">
				<td class=product-name"><?php echo $products_array[$key]["nazwa"]; ?></td>
				<td><input type="text" name="quantity" value="1" size="2" /></td>
				<td><input type="submit" value="Add to cart" class="btnAddAction" /></td>
				</form>
			</tr>
	<?php } ?>
	</table>
	</div>
	<?php }
	Disconnect($connection);
?>
