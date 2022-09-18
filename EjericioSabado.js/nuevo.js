const objKoder = {
    nombre: 'Sofy',
    apellidoPaterno: 'Arreguin',
    generacion: '20JS',
    hobiePrincipal: 'Escuchar musica'
}

const arrayKeysObj = ['libroFavorito', 'musicaPrincipal','tipoDesarrollador']
const arrayValuesObj = ['A monster calls', 'Kpop', 'BackEnd - .Net']

arrayKeysObj.forEach((key, index) => {
    objKoder[key] = arrayValuesObj[index];
});

// console.log("objKoder", objKoder)