let colores = ["azul", "amarillo", "naranja", "verde", "violeta", "añil", "rojo", "negro", "blanco", "gris"]
let frase = ["Hola", "mundo", "desde", "la", "sede", "de", "Codenotch"]


function impares(numero)

{
    for(let i = 0; i <= numero; i++){
        if(i % 2 != 0){
        console.log(i++);
        }
     }
}

function arrayRevertido()
{
    let frase = "Hola buenos días a todos desde Madrid";
    let fraseReves = frase.split(" ").reverse().join(" ");
    return fraseReves;
}

function coloresArcoiris(color) {
    for (let i = 0; i < color.length; i++) {
        if (color[i] == "rojo" || color[i] == "naranja" || color[i] == "amarillo" || color[i] == "verde" ||
            color[i] == "añil" || color[i] == "azul" || color[i] == "violeta") {
            console.log("el color " + color[i] + " está en el arcoiris");

        } else {
            console.log("el color " + color[i] + " NO está en el arcoiris");
        }
    }
}


function numCaracteres(frase:string[])
{
    let resultado = 0
    for(let i = 0; i < frase.length; i++){
        resultado += frase[i].length;
    } return(resultado);
}