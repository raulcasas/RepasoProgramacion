let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let nombres = ["María", "Marco", "Marta", "Raúl", "Miguel", "Manolo"]

function numPares(pares)
{
    let i = 0
    while(i < arr1.length){
        if(pares[i] % 2 == 0){
            return ("Este número " + pares[i] + " es PAR")
        }
        i++
    } 
    return ("Este número " + pares[i] + " es IMPAR");
}


function empiezaM(m)
{
    let i = 0
    let inicioM = true
    let resultado = "Todos los nombres empiezan por M"
    while(i < nombres.length && inicioM == true){
        if(m[i][0] != "M"){
            resultado = "No todos empiezan por M"
            inicioM = false
        }
        i++
    }
    return resultado
}  