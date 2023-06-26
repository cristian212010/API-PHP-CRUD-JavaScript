<?php
class Conectar{
    protected $dbCnx;
    protected function conexion(){
        try {
            $conectar = $this->dbCnx = new PDO("mysql:local=localhost;dbname=alquilartemis","root","");
            return $conectar;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function set_name(){
        return $this->dbCnx->query("SET NAMES 'utf8'");
    }
}
?>