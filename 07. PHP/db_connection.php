<?php
		function Connect(){
			$connection = new mysqli("localhost","root","","internet_applications");
			
			if($connection->connect_error) {
				 die("Connect failed: %s\n".$connection->error);
			}
			
			return $connection;
		}

		function Disconnect($connection){
			$connection->close();
		}

    function GetAllProducts(){
      $connection = Connect();
    
      $result = $connection->query("SELECT * FROM `produkty-php` ORDER BY id ASC");
      $products_array = $result->fetch_all(MYSQLI_ASSOC);
      
      Disconnect($connection);
      
      return $products_array;
    }
?>
