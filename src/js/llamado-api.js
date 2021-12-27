const url = 'https://www.mockachino.com/a71b232c-218e-4d/users'

const previous = document.querySelector('#previous')
const next = document.querySelector('#next')


// let offset= 0
// let limit=10;
export const obtenerUsuarios = async() => {

   try {
    const respuesta= await fetch (url);

    if (!respuesta.ok) throw'No se pudo cargar la API';

    const data = await respuesta.json();
    const usuarios = data.results

    
   const arrayNuevo = (usuarios, pege) => {

   }

   
     console.log(arrayNuevo)  
    

    
//     const paginado = (arraryNuevo) => {
//         for (let i = offset; i<= offset+limit; i++) {
//             obtenerUsuarios(i)
//         }
        
        
//  }
//  previous.addEventListener('click', () => {
//     if (offset!= 1) {
//         offset-=10;
//         removeChildNodes(card)
//         paginado(offset, limit)
//     }
   
// })

// next.addEventListener('click', () => {
//     offset+=10;
//     removeChildNodes(card)
//     paginado(offset, limit)
// })
//  function removeChildNodes (parent) {
//      while(parent.firstChild) {
//          parent.removeChild(parten.firstChild)
//      }
//  }


//  paginado (offset, limit)


    //let arrayNuevo= usuarios.map(user=> user.name.first)
     // arrayNombres.sort(function (a,b){
    //     if (a.name.first > b.name.first ) {
    //         return 1;
    //     } if (a.name.first  < b.name.first ) {
    //         return -1;
    //     }
    //     return 0
    // })
    return usuarios;

   }catch(err) {
  
    throw err
}


}

