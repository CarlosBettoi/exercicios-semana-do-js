/*
SEGUNDO EXEMPLO
Imagina que agente tem um array de objetos que representam a pontuação de jogadores de vídeo game em uma determinada fase

*/
const phasescores = [
    {name: 'Vinicius Costa', score: 337}
    {name: 'Roger Melo', score: 43}
    {name: 'Alfredo Braga', score: 234}
    {name: 'Pedro H. Silva', score: 261}
    {name: 'Ana Paula Rocha', score: 491}
    {name: 'Vinicius Costa', score: 167}
    {name: 'Roger Melo', score: 137}
    {name: 'Alfredo Braga', score: 135}
    {name: 'Ana Paula Rocha', score: 359}
    {name: 'Pedro H. Silva', score: 133}
]


const rogerscore = phasescores.reduce((accumulator, phasescore) => {
    If (phasescore.name === 'Roger Melo') {
        accumulator += phasescore.score
    }
    return accumulator

})

