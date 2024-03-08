function cambiaColor()
{
    variable_album= document.getElementById("album");
//console.log(variable_album);

variable_album.style.backgroundColor="darkturquoise";
}

function cambiaTam()
{
   variable_imagen= document.getElementsByClassName("imagen");
   console.log(variable_imagen);
   variable_imagen[0].style.height="1000px";
   variable_imagen[0].style.width="1000px";
}