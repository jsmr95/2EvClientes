<?php

	$data = $_POST['op'];

	class Editorial{
		public $info;
		
	}

	$ed = new Editorial();

	if($data == 'cursos'){
		$ed->info=array(
								array("Nombre"=>"Despliegue de Aplicaciones Web","Modalidad" => "Presencial","Duración"=>"3 meses", "Imagen"=>"daw"),
								array("Nombre"=>"Montaje y Mantenimiento de Equipos", "Modalidad" => "Presencial","Duración"=>"6 meses","Imagen"=>"mme"),
								array("Nombre"=>"Sistemas Operativos en red", "Modalidad" => "Online","Duración"=>"9 meses","Imagen"=>"sor"),
								array("Nombre"=>"Diseño de Interfaces Web","Modalidad" => "Semipresencial","Duración"=>"12 meses", "Imagen"=>"diw")
							);
						
	}
	else{

		$ed->info=array(
								array("Autor"=>"Ana Jiménez", "Fecha de incoporación"=>"2010","Imagen"=>"ana"),
								array("Autor"=>"Pablo Muñoz", "Fecha de incoporación"=>"2015", "Imagen"=>"pablo"),
								array("Autor"=>"Francisco Moral", "Fecha de incoporación"=>"2016", "Imagen"=>"francisco"),
								array("Autor"=>"Silvia Rico", "Fecha de incoporación"=>"2008", "Imagen"=>"silvia")
							);


	}

	header('Content-type: application/json; charset=utf-8');
	echo json_encode($ed);


?>