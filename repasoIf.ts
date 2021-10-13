function signoZodiaco(dia, mes)
{

    if(dia >= 21 && mes == 1 || dia <= 19 && mes == 2){
        return ("Tu signo zodiacal es Acuario");

    } else if(dia >= 20 && mes == 2 || dia <= 20 && mes == 3){
        return ("Tu signo zodiacal es Piscis");

    } else if(dia >= 21 && mes == 3 || dia <= 20 && mes == 4){
        return ("Tu signo zodiacal es Aries");

    } else if(dia >= 21 && mes == 4 || dia <= 21 && mes == 5){
        return ("Tu signo zodiacal es Tauro");

    } else if(dia >= 22 && mes == 5 || dia <= 21 && mes == 6){
        return ("Tu signo zodiacal es Géminis");

    } else if(dia >= 22 && mes == 6 || dia <= 23 && mes == 7){
        return ("Tu signo zodiacal es Cáncer");

    } else if(dia >= 24 && mes == 7 || dia <= 23 && mes == 8){
        return ("Tu signo zodiacal es Leo");

    } else if(dia >= 24 && mes == 8 || dia <= 23 && mes == 9){
        return ("Tu signo zodiacal es Virgo");

    } else if(dia >= 24 && mes == 9 || dia <= 23 && mes == 10){
        return ("Tu signo zodiacal es Libra");

    } else if(dia >= 23 && mes == 10 || dia <= 22 && mes == 11){
        return ("Tu signo zodiacal es Escorpio");

    } else if(dia >= 23 && mes == 11 || dia <= 21 && mes == 12){
        return ("Tu signo zodiacal es Sagitario");

    } else if(dia >= 22 && mes == 12 || dia <= 20 && mes == 1){
        return ("Tu signo zodiacal es Capricornio")
    }
}

function ubicacion(pais)
{
    if (pais == "Tailandia" || pais == "Japón" || pais == "India" || pais == "China" || pais == "Indonesia") {
        console.log("Estás en Ásia");

    } else if (pais == "Sudáfrica" || pais == "Egipto" || pais == "Argelia" || pais == "Nigeria" || pais == "Botsuana") {
        console.log("Estás en África");

    } else if (pais == "Canadá" || pais == "EE.UU" || pais == "Groenlandia" || pais == "Guam" || pais == "México") {
        console.log("Estás en América del Norte");

    } else if (pais == "Brasil" || pais == "Colombia" || pais == "Argentina" || pais == "Ecuador" || pais == "Uruguay") {
        console.log("Estás en América del Sur");

    } else if (pais == "España" || pais == "Italia" || pais == "Francia" || pais == "Alemania" || pais == "Holanda") {
        console.log("Estás en Europa");

    } else if (pais == "Australia" || pais == "Papúa" || pais == "Nueva Guinea" || pais == "Nueva Zelanda" || pais == "Isla Salmón" || pais == "Fiyi") {
        console.log("Estás en Oceanía");

    } else {
        console.log("Deduzco que al no poner ningún país estarás en la Antártida, puesto que este continente no tiene países");
    }
}

function parImpar(numero:number) 
{
    if (numero % 2 == 0) {
        console.log("El número " + numero + " es PAR");

    } else {
        console.log("El número " + numero + " es IMPAR");
    }

}


function comprobar(array:string[])
{
    return parImpar(numCaracteres(array));
}