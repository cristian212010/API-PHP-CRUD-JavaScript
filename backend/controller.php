<?php
header('Content-Type:application/json');

require_once("conectar.php");
require_once("models.php");

$alquilar = new Alquiler();

$body = json_decode(file_get_contents("php://input"),true);

switch ($_GET["op"]) {
    case 'GetAll':
        $datos = $alquilar->get_clientes();
        echo json_encode($datos);
        break;   
    case 'insert':
        $datos = $alquilar->insertar_cliente($body['id_constructora'],$body['nombre_constructora'],$body['nit_constructora'],$body['nombre_representante'],$body['email_contacto'],$body['telefono_contacto']);
        echo json_encode("Los datos ingresaron correctamente");
    case 'delete':
        $datos = $alquilar-> delete_cliente($_GET['id']);
        echo json_encode("Cliente eliminado");
    default:
        break;
}
?>