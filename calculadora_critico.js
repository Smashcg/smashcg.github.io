function calcular() {
    pcrit = Number(inputPCrit.value)
    basecrit = Number(inputBasePCrit.value)
    var chanceCritica = (((pcrit + 150) / 150) * basecrit)
    var critRestante = (((150 * (100 / basecrit)) - 150) - pcrit)
    alert("Você tem " + (chanceCritica.toFixed(2)) + "% de Critar!\nFaltam " + Math.ceil(critRestante) + " P.crit para alcançar os 100%!");
}