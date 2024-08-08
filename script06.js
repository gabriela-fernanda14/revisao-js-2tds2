let armas = [ "Laser", "Mísseis",
             "Tiros", "Chicotada",  
             "Facada"];

let ataque = []

ataque.push ("GutoPaçocão")
ataque.push(armas[4]);
ataque.push(armas[3]);
ataque.push(armas[3]);
ataque.push(armas[2]);
ataque.push(armas[0]);
ataque.push(armas[4]);
ataque.push(armas[4]);
ataque.push(armas[4]);
ataque.push(armas[1]);

for (let i = 0; i < ataque.length; i++) {
    if (i == 0) {
        console.log ("Nome do robô: " + ataque [i]);
    
    } else {
        console.log ("Ataque" + i + ":" + ataque[i]);
    }
}