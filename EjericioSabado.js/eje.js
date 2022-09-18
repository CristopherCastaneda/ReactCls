const objKoder = {
    nombre: 'cristo',
    apellidoPaterno: 'Castañeda',
    generacion: 'g20',
    hobiePrincipal: 'dormir'
}

const arrayKeysObj = ['libroFavorito', 'musicaPrincipal', 'tipoDesarrollador']
const arrayValuesObj = ['Un Mundo Feliz', 'House', 'FullStack - Desktop']

arrayKeysObj.forEach((key, index) => {
    objKoder[key] = arrayValuesObj[index];
});
console.log(objKoder)
