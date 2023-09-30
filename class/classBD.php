<?php
class baseDatos
{
    //atributo
    var $conexion;
    var $bloque;
    var $numeRegistros;
    function abrirConexion()
    {
        // mysqli_connect(servidor, user, pwd, bd);
        $this->conexion = mysqli_connect("localhost:3306", "UBasta", "123", "Basta");
    }

    function cierreBD()
    {
        mysqli_close($this->conexion);
    }

    function consulta($p_query)
    {
        $this->abrirConexion();
        $this->bloque = mysqli_query($this->conexion, $p_query);
        $this->numeRegistros = mysqli_num_rows($this->bloque);
        // mysqli_error();
        $this->cierreBD();
    }
}

$objetoBD = new baseDatos();
?>