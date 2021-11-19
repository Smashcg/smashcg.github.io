function calcular() {
    pcrit= Number(inputPCrit.value)
    basecrit = Number(inputBasePCrit.value)
    var chanceCritica =(((pcrit + 150)/150)*basecrit)
    var critrestante = (((150*(100/basecrit))-150)-pcrit)
    alert("Você tem " + (chanceCritica) + "% de Critar!\nFaltam " + Math.ceil(critrestante) + " P.crit para alcaçar os 100%!");
}
