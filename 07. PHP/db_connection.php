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
?>
