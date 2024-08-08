let intensidade = 13;
let palmas = "";
let contagem = 0;

for ( let i = 1; i <= intensidade; i ++) {
    palmas = palmas + "👏";
    contagem = contagem + 1;

    if (contagem % 5 == 0) {
    palmas = palmas + "✨"
    }
};




console.log(palmas)
