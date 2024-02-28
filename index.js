let placar = ranking(15,2)

if (placar < 10) {
    nivel = "Ferro"
} else if (placar > 10 && placar <20){
    nivel = "Bronze"
} else if (placar > 20 && placar <50){
    nivel = "Prata"
}else if (placar > 50 && placar <80){
    nivel = "Ouro"
}else if (placar > 80 && placar <90){
    nivel = "Diamante"
}else if (placar > 90 && placar <100){
    nivel = "Lendário"
}else if (placar > 100){
    nivel = "Imortal"
}

console.log("O Heróis tem saldo de " + placar + " e está no nível " + nivel)


function ranking (win, loss){
    return win - loss
}


