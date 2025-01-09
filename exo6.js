let nombredix =[1,2,3,4,5,6,7,8,9,1];
function findMinMax(tableau) {
    let min = nombredix[0];
    let max = nombredix[0];
    for (let i = 1; i < tableau.length; i++) {
        if (nombredix[i] < min) {
            min = tableau[i];
        }
        if (nombredix[i] > max) {
            max = nombredix[i]
        }
    }
    return { min: min, max: max };
}
